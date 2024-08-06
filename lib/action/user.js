import User from "../models/User";
import { connectionDB } from "../mongodb/mongoose";

export const createOrUpdateUser = async (id, first_name, Last_name, image_url, email_addresses, username) => {
    try {
        await connectionDB();

        const user = await User.findOneAndUpdate(
            { clerkId: id },
            {
                $set: {
                    firstName: first_name,
                    lastName: Last_name,
                    username: username,
                    email: email_addresses[0].email_addresses,
                    profilephoto: image_url,
                },
            },
            { upsert: true, new: true }
        );
        await user.save();
        return user
    }

    catch (error) {
        console.error(error)
    }

}

export const deleteUser = async (id) => {
    try {
        await connectionDB();
        await User.findOneAndDelete({ clerkId: id })
    }

    catch (error) {
        console.error(error)
    }
}