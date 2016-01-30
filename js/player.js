function char(){
    //basic
    this.name = "example";
    this.hp = 100;
    this.getHp = function(){
        return this.hp;
    }
    
    this.points = 0;
    
    //items
    
    
    //skills
    
    //methods
    this.click = function(){
        
    }
}

function monster(name,hp,lvl,drop){
    this.name = name;
    this.hp = hp;
    this.lvl = hp;
    this.drop = drop;
}