/**
 * Para criar: name, email, password 
 * 
 * Sempre que precisar definir um formato de objeto, precisa cria uma interface
 */

 interface TechObject {
   title: string;
   experience: number;
 }

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  // techs: string[]; caso receba somente string, pode ser declarado dessa forma
  techs: Array<string | TechObject>;
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password
  };

  return user;
}