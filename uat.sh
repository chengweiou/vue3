yarn build:uat
rm -rf ~/Desktop/docker/universe/xxx-web/dist
cp -r dist ~/Desktop/docker/universe/xxx-web/
cp nginx.conf ~/Desktop/docker/universe/xxx-web/default.conf
cp docker-compose.yml ~/Desktop/docker/universe/xxx-web/docker-compose.yml
cd ~/Desktop/docker/universe/xxx-web

docker compose down
docker compose rm -f
docker compose up -d
