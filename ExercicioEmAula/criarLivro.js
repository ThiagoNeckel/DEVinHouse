class CriaLivro{
    constructor(titulo, autor, ano ){
        this.titulo = titulo;
        this.autor = autor;
        this.ano =ano;
        this.emprestimo = true;
    }
     reserva(valor){
         
        
        if(valor && this.emprestimo){
        
            return console.log("livro "+ this.titulo + " esta  emprestado")
        }else
        this.emprestimo = false
        return console.log( this.titulo + " livro na biblioteca")
     
    }

    static ordem(array){
    return array.sort((a, b) => a.ano - b.ano);
}
}

let livro= [ ];

const livro3 = new CriaLivro('cacau', 'Matt', 2021);
livro3.reserva(true)
const livro1 = new CriaLivro( 'cao maluo', "Mathias", 1998);
livro1.reserva(false)
const livro2 = new CriaLivro('caderudo', 'mario', 2001);
livro2.reserva(false)
livro.push(livro3)
livro.push(livro1)
livro.push(livro2)
console.log(livro)
CriaLivro.ordem(livro)


