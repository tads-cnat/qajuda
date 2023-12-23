CREATE TRIGGER [TR_APIQAjuda_colaborador_acao_aceita] 
AFTER UPDATE OF [solicitacao]  
ON [APIQAjuda_colaborador_acao] 
FOR EACH ROW WHEN (OLD.solicitacao = 'E') AND (NEW.solicitacao = 'A') 
BEGIN 

UPDATE APIQAjuda_acao SET
qtd_volunt = qtd_volunt + 1
WHERE id = NEW.acao_id;

END