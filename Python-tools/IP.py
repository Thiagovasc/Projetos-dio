import socket
import sys


def main_function():
    try:
        v = socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0)
    except socket.error as erro:
        print(f'Houve um erro na conexão'
              f'\nErro: {erro}')
        sys.exit()
    finally:
        print('Socket bem sucedido')

        host_ip = str(input('Digite o ip/host a ser conectado: '))
        porta = int(input('Digite a porta a ser utilizada: '))

        try:
            v.connect((host_ip, porta))
            print(f'Conexão estabelecida com sucesso'
                  f'no host/ip {host_ip} e na porta {porta}')
            v.shutdown(2)
        except socket.error as erro:
            print(f'Houve um erro de conexão'
                  f'\n Erro: {erro}')
            sys.exit()


if __name__ == "__main__":
    main_function()
