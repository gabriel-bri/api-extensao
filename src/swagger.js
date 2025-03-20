const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Monitoramento de Colmeias",
      version: "1.0.0",
      description: "API para gerenciar colmeias usando Node.js, Express e Prisma",
    },
  },
  apis: ["./src/routes/*.js", "./src/controllers/*.js"], // Inclui as rotas e controllers
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
