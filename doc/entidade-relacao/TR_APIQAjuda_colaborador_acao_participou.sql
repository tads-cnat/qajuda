CREATE TRIGGER [TR_APIQAjuda_colaborador_acao_participou] 
AFTER UPDATE OF [solicitacao]  
ON [APIQAjuda_colaborador_acao] 
FOR EACH ROW WHEN (OLD.solicitacao = 'A') AND (NEW.solicitacao = 'P') 
BEGIN 

UPDATE APIQAjuda_acao SET
qtd_volunt = qtd_volunt - 1
WHERE id = NEW.acao_id;

END