import os
import django
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from django.shortcuts import get_object_or_404
from APIQAjuda import models

app = FastAPI()

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "QAjudaBackend.QAjudaBackend.settings")
django.setup()

class SolicitacaoCreate(BaseModel):
    acao_id: int
    voluntario_id: int

@app.post("/solicitacoes", response_model=models.Solicitacao)
async def create_solicitacao(solicitacao_data: SolicitacaoCreate):
    acao = get_object_or_404(models.Acao, pk=solicitacao_data.acao_id)
    voluntario = get_object_or_404(models.Colaborador, pk=solicitacao_data.voluntario_id)
    
    # verifica se o colaborador já possui solicitação pendente
    if models.Solicitacao.objects.filter(acao=acao, voluntario=voluntario, status=models.Solicitacao.Status.EM_ESPERA).exists():
        raise HTTPException(status_code=400, detail="Colaborador já solicitou participar dessa ação.")
    
    solicitacao = models.Solicitacao(acao=acao, voluntario=voluntario)
    solicitacao.save()

    return solicitacao