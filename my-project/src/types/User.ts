export type initialStateType = {
    name: string | null,
    secondName: string | null,
    site: string | null,
    instagram: string | null,
    facebook: string | null,
    telegram: string | null,
    vkontakte: string | null,
    wallet: string | null,
    currentTariff: Tariff,
    confirmTariff: Tariff,
    email: string | null,
    id: string | null,
    refreshToken: string | null,
    accessToken: string | null,
    refLink: string | null,
    transactionList: UserTransaction[] ,
    balance: number,
    dateConfirmTariff: string | null,
}

export type Tariff = "average" | "elevated" | "upper" | "supreme" | null;

export type UserTransaction = {
    date: string,
    operation: "пополнение" | 'списание',
    amount: number,
    currentBalance: number,
    time: string
}

