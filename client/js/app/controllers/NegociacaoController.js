class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQtd = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        let negociacao = new Negociacao(
            DateHelper.textoParaDara(this._inputData.value),
            this._inputQtd.value,
            this._inputValor.value
        );

        let diaMesAno = negociacao.data.getDate()
            + '/' + (negociacao.data.getMonth() + 1)
            + '/' + negociacao.data.getFullYear();

        console.log(negociacao);
        console.log(DateHelper.dataParaTexto(negociacao.data));

    };
}
