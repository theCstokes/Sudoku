DIR="$( cd "$(dirname "$0")" ; pwd -P )"
sudo nginx -s stop
sudo nginx -c ${DIR}/nginx.conf
sudo nginx -s reload
