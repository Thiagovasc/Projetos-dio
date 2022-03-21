import random
import string
from tkinter import *

menu = Tk()
menu.title("Gerador de senhas")
menu.geometry("300x300")
menu.resizable(False, False)

# ----------------------------- Algoritmo ----------------------------------------------------------
letras = string.ascii_letters
digitos = string.digits
simbolos = string.punctuation

tudo = letras + digitos + simbolos
sem_simbolos = letras + digitos


def gerador_de_senha(tamanho=16):
    global password

    formatacao_senha = t1.get()
    tamanho = t2.get()
    try:
        fsenha = str(formatacao_senha)
        tm = int(tamanho)

        if formatacao_senha == 'S':
            password = "".join(random.sample(tudo, tamanho))
        elif formatacao_senha == 'N':
            password = "".join(random.sample(sem_simbolos, tamanho))
    except TypeError:
        print('Resposta incorreta, não foi possivel gerar a senha')
    finally:
        p1 = Label(menu, text=password).pack()
        breakpoint()

# ----------------------------- Widgets ---------------------------------------------------------------------
t1 = Entry(menu).grid(row=5, column=2)
t2 = Entry(menu).grid(row=6, column=2)

tl1 = Label(menu, text='Formatação: ').grid(row=5,column=1)
tl2 = Label(menu, text='Tamanho: ').grid(row=6, column=1)

l1 = Label(menu, text='Pass Generator', font=("arial", 20, "bold")).grid(row=1, column=2)
botao_1 = Button(menu, text="Gerar senha", font=("arial", 12, "bold"), command=gerador_de_senha).place(x=100, y=200)

menu.mainloop()
