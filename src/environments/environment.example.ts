// Utilize a tipagem desse arquivo como modelo para criação dos ambientes de desenvolvimento

// Crie o arquivo environment.prod.ts para setar os valores das variáveis em ambiente de produção

// Por último, crie o arquivo environment.development.ts para setar os valores das variáveis em ambiente de desenvolvimento

export type environment = {
  production: boolean;
  domain: string;
  api_key: string;
  api_token: string;
};
