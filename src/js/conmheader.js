class FrameworkConlist {

    constructor() {
        this.menulist = [];
        this._authenticated = false;
    }

    isAuthenticated() {
        return this._authenticated;
    }

    setlistMenu(menuone) {
        this.menulist = menuone;
    }

    findMenuPath(path, menuone, resultone) {
        const list = menuone != null ? menuone : this.menulist;
        console.log('conmheader.js', path);
        for (let i = 0; i < list.length; i++) {
            const m = list[i];
            if (m.child && m.child.length > 0) {
                 const result = this.findMenuPath(path, m.child, resultone);
                if (result) {
                    resultone.push(m);
                    return result;
                }
            } else {
                if (path.startsWith(m.path)) {
                    resultone.push(m);
                    return m;
                }
            }
        }
        return null;
    }

}
export default new FrameworkConlist();