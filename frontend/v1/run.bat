@echo off
setlocal

:: Defina o diretório de destino para o download e extração
set "destino=%~dp0nodejs"
set "node_dir=%destino%\node-v20.11.1-win-x64"

:: Verifique se o Node.js já está instalado
if exist "%node_dir%" (
    echo Node.js ja esta instalado em "%node_dir%"
) else (
    :: Crie o diretório se ele não existir
    if not exist "%destino%" mkdir "%destino%"

    :: Baixe o arquivo zip do Node.js
    curl -o "%destino%\node-v20.11.1-win-x64.zip" https://nodejs.org/dist/v20.11.1/node-v20.11.1-win-x64.zip

    :: Descompacte o arquivo zip
    tar -xf "%destino%\node-v20.11.1-win-x64.zip" -C "%destino%"

    :: Remova o arquivo zip após descompactá-lo
    del "%destino%\node-v20.11.1-win-x64.zip"
)

:: Adicione o Node.js ao PATH se ainda não estiver definido
if not defined NODE_HOME (
    set "PATH=%PATH%;%node_dir%"
)

:: Navega para o diretorio do projeto
cd /d "%~dp0"


:: Verifica o primeiro parâmetro passado na linha de comando
if "%1"=="" (
    echo Executando 'npm start'...
    npm run start
) else if "%1"=="ng" (
    echo Executando 'ng'...
    npm run ng
) else if "%1"=="build" (
    echo Executando 'npm build'...
    npm run build
) else if "%1"=="watch" (
    echo Executando 'npm run watch'...
    npm run watch
) else if "%1"=="test" (
    echo Executando 'npm run test'...
    npm run test
) else if "%1"=="install" (
    echo Executando 'npm install'...
    npm install
) else (
    echo Comando não reconhecido. Use 'start' ou 'install'.
)

pause