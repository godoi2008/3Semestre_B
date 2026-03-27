const documentacao = {
    openapi: '3.0.3',
    info:{
        title: 'API de Produtos',
        description: 'Documentação da API de Produtos',
        version: '1.0.0'
    },
    servers: [
        {url: 'http://localhost:3000', description: 'localhost'}
    ],
    tags: [
        {name: 'Usuários', description: 'Operações relacionadas aos usuários'},
        {name: 'Produtos', description: 'Operações relacionadas aos produtos'}
    ],
    paths: {
        "/usuarios": {
            get: {
                tags:["Usuários"],
                summary: "Listar todos os usuários",
                responses: {
                    200:{
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "apllication/json":{
                                schema:{
                                    type: "array",
                                    items: {$ref: '#/components/schemas/Listar_Usuarios'}
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags:['Usuários'],
                summary: 'Cadastrar novo usuário',
                description: "Recebe nome, email, senha para cadastrar novo usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json":{
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Usuário cadastrado com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/usuarios/{id_usuario}":{
            put: {
                tags: ['Usuários'],
                summary: 'Atualizar todos os dados do usuário',
                description: 'Atualiza todos os dados de um usuário existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuário a ser atualizado",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content:{
                        "application/json":{
                            schema: {$ref: "#/components/schemas/Atualizar_Usuario"},
                            example: {
                                nome: "Ricardo Santos",
                                email:"ricardo5@sesisp.com",
                                senha: "senhaAtualizada"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Usuário atualizado com sucesso!"
                    },
                    404: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json":{
                                example: {message: "Usuário não encontrado"}
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                    
                }

            },
            delete: {
                tags: ['Usuários'],
                summary: 'Remover Usuário',
                description: 'Remove usuário existente pelo ID',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuário a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Usuário removido com sucesso!"
                    },
                    404: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json":{
                                example: {message: "Usuário não encontrado"}
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                    
                }
            },
            
        },
        "/login": {
                post: {
                tags:['Autenticação'],
                summary: 'Realizar Login',
                description: "Autentica um usuario e retorna id e nome",
                requestBody: {
                    required: true,
                    content: {
                        "application/json":{
                            schema: {
                                $ref: "#/components/schemas/Login_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Login realizado com sucesso!",
                        content: {
                        "application/json":{
                            schema: {
                                $ref: "#/components/schemas/Resposta_Login"
                            }
                        }
                    }
                    },
                    400: {description: "Email e senha são obrigatorios"},
                    401: {description: "Credenciais inválidas"},
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/produtos": {
            get: {
                tags:["Produtos"],
                summary: "Listar todos os produtos",
                responses: {
                    200:{
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "apllication/json":{
                                schema:{
                                    type: "array",
                                    items: {$ref: '#/components/schemas/Listar_Produtos'}
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags:['Produtos'],
                summary: 'Cadastrar novo produto',
                description: "Recebe preco, categoria, link da imagem, link do produto, frete e nome para cadastrar novo produto",
                requestBody: {
                    required: true,
                    content: {
                        "application/json":{
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Produto"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Produto cadastrado com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/produtos/{id_produto}":{
            put: {
                tags: ['Produtos'],
                summary: 'Atualizar todos os dados do produto',
                description: 'Atualiza todos os dados de um produto existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_produto",
                        in: "path",
                        required: true,
                        description: "ID do produto a ser atualizado",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content:{
                        "application/json":{
                            schema: {$ref: "#/components/schemas/Atualizar_Produto"},
                            example: {
                                preco: 89.90,
                                categoria:"brinquedo",
                                link_imagem: "https://exemplo.com",
                                link_produto: "https://exemplo.com",
                                frete: false, 
                                nome: "Carro decorativo de Fórmula 1"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Produto atualizado com sucesso!"
                    },
                    404: {
                        description: "Produto não encontrado",
                        content: {
                            "application/json":{
                                example: {message: "Produto não encontrado"}
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                    
                }

            },
            delete: {
                tags: ['Produtos'],
                summary: 'Remover Produto',
                description: 'Remove produto existente pelo ID',
                parameters: [
                    {
                        name: "id_produto",
                        in: "path",
                        required: true,
                        description: "ID do produto a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Produto removido com sucesso!"
                    },
                    404: {
                        description: "Produto não encontrado",
                        content: {
                            "application/json":{
                                example: {message: "Produto não encontrado"}
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                    
                }
            },
            
        },
    },
    components:{
        schemas:{
            Listar_Usuarios:{
                type: 'object',
                properties: {
                    id: {type: "integer", example: 1},
                    nome: {type: "string", example: "Ricardo"},
                    email: {type: "string", example: "ricardo@email.com"}
                }
            },
            Cadastrar_Usuario: {
                type: 'object',
                properties: {
                    nome: {type: "string", example: "Ricardo"},
                    email: {type: "string", example: "ricardo2@email.com"},
                    senha: {type: "string", example: "Senha123"}
                }
            },
            Atualizar_Usuario: {
                type: 'object',
                required: ["nome", "email", "senha"],
                properties: {
                    nome: {type: "string", example: "Nina"},
                    email: {type: "string", example: "nina@email.com"},
                    senha: {type: "string", example: "Senha123"}
                }
            },
            Listar_Produtos:{
                type: 'object',
                properties: {
                    id: {type: "integer", example: 1},
                    preco: {type: "float", example: 98.90},
                    categoria: {type: "string", example: "Roupas"},
                    link_imagem: {type: "string", example: "https://exemplo.com"},
                    link_produto: {type: "string", example: "https://exemplo.com"},
                    frete: {type: "boolean", example: true},
                    nome: {type: "string", example: "Blusa Branca"}
                }
            },
            Cadastrar_Produto: {
                type: 'object',
                properties: {
                    preco: {type: "float", example: 98.90},
                    categoria: {type: "string", example: "Roupas"},
                    link_imagem: {type: "string", example: "https://exemplo.com"},
                    link_produto: {type: "string", example: "https://exemplo.com"},
                    frete: {type: "boolean", example: true},
                    nome: {type: "string", example: "Blusa Branca"}
                }
            },
            Atualizar_Produto: {
                type: 'object',
                required: ["nome", "email", "senha"],
                properties: {
                    preco: {type: "float", example: 98.90},
                    categoria: {type: "string", example: "Roupas"},
                    link_imagem: {type: "string", example: "https://exemplo.com"},
                    link_produto: {type: "string", example: "https://exemplo.com"},
                    frete: {type: "boolean", example: true},
                    nome: {type: "string", example: "Blusa Branca"}
                }
            },
            Login_Usuario : {
                type: 'object',
                required: true,
                properties: {
                    nome: {type: "string", example: "Ricardo"},
                    email: {type: "string", example: "ricardo2@email.com"},
                    senha: {type: "string", example: "Senha123"}
                }
            },
            Reposta_Login : {
                type: 'object',
                properties:{
                message: {type: 'string', example: 'Login realizado com sucesso'},
                usuario: {
                    type: 'object',
                    properties: {
                    id_usuario: {type: "string", example: 1},    
                    nome: {type: "string", example: "Ricardo"},
                }
                }    
                }
            }
        }
    }
}
export default documentacao