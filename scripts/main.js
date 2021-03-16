let die = loadMusic("die");

Events.run(Trigger.update, () => {
    if(Core.input.justTouched()){
        if(Mathf.randomBoolean(0.02)){
            die.setVolume(100);
            die.play();
            Timer.schedule(() => Core.app.exit(), 1);
        }
    }
});
