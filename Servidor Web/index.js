const express = require("express");
const app = express();
app.use(express.json());

let tareas = [];
let nextId = 1;

const findById = (id) => tareas.find(t => t.id === Number(id));
const required = (v) => v !== undefined && v !== null && String(v).trim() !== "";

    app.post("/tareas", (req, res) => {
        const { titulo, descripcion = "" } = req.body;
        
        if (!required(titulo)) {
            return res.status(400).json({ error: "El campo 'titulo' es obligatorio." });
        }
        
        const nueva = {
            id: nextId++,
            titulo: String(titulo).trim(),
            descripcion: String(descripcion),
            completada: false,
            fechaCreacion: new Date().toISOString()
        };
        
        tareas.push(nueva);
        res.status(201).json(nueva);
    });

    app.get("/tareas", (req, res) => {
        res.json(tareas);
    });

    app.get("/tareas/:id", (req, res) => {
        const tarea = findById(req.params.id);
            if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });
            res.json(tarea);
    });

    app.put("/tareas/:id", (req, res) => {

        const tarea = findById(req.params.id);
           
            if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });

        const { titulo, descripcion, completada } = req.body;

            if (titulo !== undefined) {
                if (!required(titulo)) return res.status(400).json({ error: "El 'titulo' no puede estar vacío." });
                tarea.titulo = String(titulo).trim();
            }

            if (descripcion !== undefined) tarea.descripcion = String(descripcion);

            if (completada !== undefined) {
                const val = (typeof completada === "string")
                ? completada.toLowerCase() === "true"
                : !!completada;
                tarea.completada = val;
            }

            res.json(tarea);
    });


    app.delete("/tareas/:id", (req, res) => {
        
        const idx = tareas.findIndex(t => t.id === Number(req.params.id));
            
            if (idx === -1) return res.status(404).json({ error: "Tarea no encontrada" });
                const [eliminada] = tareas.splice(idx, 1);
                res.json(eliminada);
    });

    app.get("/tareas/stats", (req, res) => {
       
        const total = tareas.length;
        const completadas = tareas.filter(t => t.completada === true).length;
        const pendientes = total - completadas;

        const reciente = total === 0 ? null :
            tareas.reduce((a, b) => (a.fechaCreacion > b.fechaCreacion ? a : b));

        const antigua = total === 0 ? null :
            tareas.reduce((a, b) => (a.fechaCreacion < b.fechaCreacion ? a : b));

        res.json({ total, completadas, pendientes, reciente, antigua });
    });


    app.get("/", (_, res) => {
        res.send("API To-Do con Express: usa /tareas y /tareas/stats");
    });

    app.use((req, res) => {
        res.status(404).json({ error: "Ruta no encontrada" });
    });

    app.use((err, req, res, next) => {
        console.error(err);
        res.status(500).json({ error: "Error interno del servidor" });
    });

    const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
