import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addColunWhatsappInOrphanages1602956210042 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("orphanages", new TableColumn({
            name: "whatsapp",
            type: "varchar"
        }));  
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("orphanages", "whatsapp");
    }


}
