export default function decorate(block) {
    /*const cols = [...block.firstElementChild.children];
    block.classList.add(`columns-${cols.length}-cols`);*/

    const query = block.querySelector('a[href]');
    console.log("Sherest >>", query);
}
