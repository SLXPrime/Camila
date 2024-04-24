echo "Trocando para master branch"
git checkout master

echo "Compilando arquivos..."
npm run build

echo "Realizando deploy para o servidor! 🚀🚀"
scp -r build/* root@vps52630.publiccloud.com.br:/var/www/Camila/

echo "Concluido!"