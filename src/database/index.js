import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';
import Recipient from '../app/models/Recipient';

const models = [User, Recipient];

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        this.conection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.conection));
    }
}

export default new DataBase();
