import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Orphanege from './orphanege';

@Entity('images')
export default class Image{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;    

    @ManyToOne(()=>Orphanege, orphanege=> orphanege.images )
    @JoinColumn({name:'orphanages_id'})
    orphanage:Orphanege;
}
