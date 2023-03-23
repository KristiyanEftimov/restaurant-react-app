import MenuItems from "./MenuItems";
export default function Menu(){
    const name = "Test";
    const supi = [
        {
            name: "Shkembe"
        },
        {
            name: "Topcheta"
        },
        {
            name: "Bob"
        }
    ]
    return (
        <div>
            <ul>
                <MenuItems order = {supi}></MenuItems>
            </ul>
        </div>
    );
}