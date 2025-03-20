const express = require("express");
const router = express.Router();
const colmeiaController = require("../controllers/colmeias.controller");

/**
 * @swagger
 * /colmeias:
 *   post:
 *     summary: Cria uma nova colmeia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               localizacao:
 *                 type: string
 *               temperatura:
 *                 type: number
 *               umidade:
 *                 type: number
 *     responses:
 *       201:
 *         description: Colmeia criada com sucesso
 */
router.post("/", colmeiaController.criarColmeia);
/**
 * @swagger
 * /colmeias:
 *   get:
 *     summary: Lista todas as colmeias
 *     responses:
 *       200:
 *         description: Retorna um array de colmeias
 */
router.get("/", colmeiaController.listarColmeias);
/**
 * @swagger
 * /colmeias/{id}:
 *   get:
 *     summary: Busca uma colmeia por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da colmeia a ser buscada
 *     responses:
 *       200:
 *         description: Retorna os dados da colmeia encontrada
 *       404:
 *         description: Colmeia não encontrada
 */
router.get("/:id", colmeiaController.buscarColmeiaPorId);

/**
 * @swagger
 * /colmeias/{id}:
 *   put:
 *     summary: Atualiza uma colmeia pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da colmeia a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               localizacao:
 *                 type: string
 *               temperatura:
 *                 type: number
 *               umidade:
 *                 type: number
 *     responses:
 *       200:
 *         description: Colmeia atualizada com sucesso
 *       404:
 *         description: Colmeia não encontrada
 */
router.put("/:id", colmeiaController.atualizarColmeia);

/**
 * @swagger
 * /colmeias/{id}:
 *   delete:
 *     summary: Deleta uma colmeia pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da colmeia a ser deletada
 *     responses:
 *       200:
 *         description: Colmeia deletada com sucesso
 *       404:
 *         description: Colmeia não encontrada
 */
router.delete("/:id", colmeiaController.deletarColmeia);

module.exports = router;
