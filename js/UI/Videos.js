export {Video};
class Video{
    videoSrc="";videoClass="";videoloader="";videoControls=true
    //dom 
    videoElement="";
    constructor({src,videoclass,loader,controls}){
        if(src==null || src==undefined){
            this.showError("Video instance must have a src attribute")
        }else{
            this.videoSrc=src
            this.videoloader=loader
            this.videoClass=videoclass
            if(controls){this.videoControls=true}else{this.videoControls=false}
        }
    }
    appendVideo(parentID){
        if(parentID==null || parentID==undefined){
            this.showError("Video instance must have a parent to append to") 
        }else{
            //add functionality to check for class/id
            var parentTemplate=document.getElementById(parentID)
            var videoTemplate=HtmlElements.createElement("video")
            if(HtmlElements.nonNull(this.videoClass)){
                videoTemplate.classList.add(this.classList)
            }if(HtmlElements.nonNull(this.videoloader)){
                var loader_template=HtmlElements.createElement("div")
                loader_template.classList.add("default_loader")
                videoTemplate.appendChild(loader_template)
            }
            videoTemplate.src=this.videoSrc
            videoTemplate.controls=this.videoControls
            parentTemplate.appendChild(videoTemplate)
        }
    }
    showError(error_message){
        console.error(error_message)
    }
}

class HtmlElements{
    constructor(){}
    static nonNull(param){
        if(param!=null && param!="" && param!=undefined){
            return true;
        }else{
            return false;
        }  
    }
    static createElement(elementType){
        var element=document.createElement(elementType)
        return element;
    }
    static appendElement({child,parent}){
        parent.appendChild(child)    
    }
}

