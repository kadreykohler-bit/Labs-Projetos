import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger: true});

server.register(cors, {
    origin: "*",
});

const teams = [
    { id: 1, name: "ferrari", base: "ferrari" },
    { id: 2, name: "mercedes", base: "mercedes" },
    { id: 3, name: "red bull", base: "red bull" }
];

const drivers = [
    { id: 1, name: "lewis hamilton", base: "mercedes" },
    { id: 2, name: "max verstappen", base: "red bull" },
    { id: 3, name: "charles leclerc", base: "ferrari" }
];

server.get("/teams", async (req, res) => {
   res.type("application/json").code(200);
   return [{ teams }];
});

server.get("/drivers", async (req, res) => {
    res.type("application/json").code(200);
    return [{ drivers }];
});

interface Driverparams {
    id: string;
}

server.get<{Params: Driverparams}>(
    "/drivers/:id", 
    async (req, res) => {
    const id = parseInt(req.params.id); 
    const driver = drivers.find((d) => d.id === id); 

    if (!driver) {
        res.type("application/json").code(404);
        return { message: "Driver not found" };
    }else{
        res.type("application/json").code(200);
        return { driver };
    }
});

server.listen({port: 3333}, () => {
   console.log("Server init");
});
