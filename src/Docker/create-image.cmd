docker build --no-cache -f SQL\Dockerfile.PostgreSql -t inv2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t inv2/app ../..
