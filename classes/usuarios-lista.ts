import { Usuario } from './usuario';


export class UsuariosLista {

  private lista: Usuario[] = [];

  constructor() { }


  // Agrega usuario a la lista
  public agregar(usuario: Usuario) {

    this.lista.push( usuario );

    console.log( this.lista );

    return usuario;

  }


  // Actualiza nombre del usuario
  public actualizarNombre(id: string, nombre: string) {

    for (const usuario of this.lista) {

      if (usuario.id === id) {
        usuario.nombre = nombre;
        break;
      }

    }

    console.log('==== Actualizando usuario ===========');
    console.log(this.lista);

  }


  // Obtener lista de usuarios
  public getLista() {
    return this.lista;
  }


  public getUsuario(id: string) {

    return this.lista.find(usuario => usuario.id === id);

  }


  public getUsuariosEnSala(sala: string) {
  
    return this.lista.filter(usuario => usuario.sala === sala);

  }


  public borrarUsuario(id: string) {

    const tempUsuario = this.getUsuario(id);

    this.lista = this.lista.filter(usuario => usuario.id !== id);

    return tempUsuario;

  }
}

