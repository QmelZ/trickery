let die = loadMusic("die");

function iterateChildren(p){
    print(1);
    if(
        p === null ||
        p === undefined ||
        p.children === null ||
        p.children === undefined
    ) return;
    
    print(2)
    p.children.each(e => {
        if(e instanceof Button){
            print(3);
            try{
                print(4);
                let l = extend(ChangeListener, {
                    changed(){
                        die.setVolume(1);
                        die.play();
                        Timer.schedule(() => Core.app.exit(), 1);
                    }
                });
                e.addListener(l);
            }catch(c){}
        }else{
            print(5);
            try{
                iterateChildren(e);
            }catch(c){}
        }
    });
}

Events.on(ClientLoadEvent, () => {
    iterateChildren(Vars.ui.menuGroup);
});
