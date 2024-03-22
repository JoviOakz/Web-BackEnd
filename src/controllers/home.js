module.exports = {
    async pagInicialGetIndex(req, res) {
        res.render('../views/index');
    },
    async pagInicialGetAluno(req, res) {
        res.render('../views/aluno');
    }
}