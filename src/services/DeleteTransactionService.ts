// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // Buscar se existe? se não retorna um erro
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }
    // const response  = await transactionsRepository.remove(transaction);
    await transactionsRepository.remove(transaction); // assim pois n vai retornar nada
  }
}

export default DeleteTransactionService;
