const prisma = require("../prismaClient");

module.exports = {
  async criarColmeia(req, res) {
    try {
      const { nome, localizacao, temperatura, umidade } = req.body;
      const colmeia = await prisma.colmeia.create({
        data: { nome, localizacao, temperatura, umidade },
      });
      res.status(201).json(colmeia);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar colmeia" });
    }
  },

  async listarColmeias(req, res) {
    try {
      const colmeias = await prisma.colmeia.findMany();
      res.json(colmeias);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar colmeias" });
    }
  },

  async buscarColmeiaPorId(req, res) {
    try {
      const { id } = req.params;
      const colmeia = await prisma.colmeia.findUnique({ where: { id } });

      if (!colmeia) return res.status(404).json({ error: "Colmeia não encontrada" });

      res.json(colmeia);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar a colmeia" });
    }
  },

  async atualizarColmeia(req, res) {
    try {
      const { id } = req.params;
      const { nome, localizacao, temperatura, umidade } = req.body;

      const colmeia = await prisma.colmeia.update({
        where: { id },
        data: { nome, localizacao, temperatura, umidade },
      });

      res.json(colmeia);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar a colmeia" });
    }
  },

  async deletarColmeia(req, res) {
    try {
      const { id } = req.params;
      await prisma.colmeia.delete({ where: { id } });

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar a colmeia" });
    }
  },
};
