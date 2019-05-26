export interface OS {
    id: number;
    cliente_id: number;
    equipamento_id: number;
    problema_relatado: string;
    problema_encontrado: string;
    config_dados_empresa_id: number;
    obs: string;
    tecnico_id: number;
    pecas_id: string;
    situacao: string;
    fotos: string;
    created_at: string;
    updated_at: string;
}