docker build -t recordshare . --network=host

PID=$(sudo lsof -t -i:3000)
if [ -n "$PID" ]; then
  echo "Killing process $PID using port 3000"
  sudo kill -9 $PID
fi

CONTAINER_ID=$(docker ps -q --filter "publish=3000")
if [ -n "$CONTAINER_ID" ]; then
  echo "Stopping container $CONTAINER_ID using port 3000"
  docker stop $CONTAINER_ID
  docker rm $CONTAINER_ID
fi

# docker run -p 3000:3000 recordshare
npm start