// Troque a palavra interface por const no arquivo original environment.ts e adicione os respectivos valores a cada atributo do objeto.

// Depois crie o arquivo environment.prod.ts para setar os valores das variáveis em ambiente de produção

// Por último, crie o arquivo environment.development.ts para setar os valores das variáveis em ambiente de desenvolvimento

export interface environment {
  production: boolean;
  domain: string;
  api_key: string;
  api_token: string;
}
