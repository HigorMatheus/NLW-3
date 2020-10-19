import Orphanege from "../models/orphanege";
import images_view from "./images_view";



export default {
    render(orphanage:Orphanege) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            whatsapp: orphanage.whatsapp,
            images: images_view.renderMany(orphanage.images)
        }
    },

    renderMany(orphanages:Orphanege[]) {
        return orphanages.map(orphanage=> this.render(orphanage))
    }
}