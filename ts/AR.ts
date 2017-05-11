const resolutions = require('../data/resolutions.json')
class AR{
    private width:number;
    private height: number;
    private aspectRatio: number;
    private aspectRatioStr: string;
    private LCF: number;
    private LCnumerator: number;
    private LCdenominator: number;
    
    constructor(width:number,height:number) {
        this.setDimensions(width,height)
    }
    setDimensions(width: number, height: number):void {
        this.width = width;
        this.height = height;
        this.aspectRatio = width / height;
        this.aspectRatioStr = ''
        this.calcARstring()
    }
    getAR() {
        return this.aspectRatio;
    }
    getARString() {
        return this.aspectRatioStr;
    }
    getWidth() {
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    toString():string {
        return 'Aspect Ratio Object:\nWidth: '+this.width+'\nHeight: '+this.height+'\nAspect Ratio: '+this.aspectRatio+' ('+this.aspectRatioStr+')\n'
    }
    private calcARstring() {
        let queryRes = resolutions[this.width.toString()][this.height.toString()]
        if (queryRes) {
            this.aspectRatioStr = queryRes;
            return;
        }
        this.LCF = this.getLCF();
        this.LCnumerator = this.getLCnumerator();
        this.LCdenominator = this.getLCdenominator();
        this.aspectRatioStr = this.LCnumerator + ':' + this.LCdenominator
    }
    private getLCF(val1: number = this.width, val2: number = this.height) {
        val1 = 2 * Math.round(val1 / 2);
        val2 = 2 * Math.round(val2 / 2);
        let largestVal: number = val1 > val2 ? val1 : val2;
        let LCF:number = 1;
        for (let i = 2; i < largestVal; i++){
            if (val1 % i == 0 && val2 % i == 0) {
                LCF = i;
            }
        }
        return LCF;
    }
    private getLCnumerator(width:number=this.width, LCF:number=this.LCF) {
        return width / LCF;
    }
    private getLCdenominator(height: number = this.height, LCF: number = this.LCF) {
        return height/ LCF;
    }
    /**
     * Sets the new height based on a desired width.
     */
    scaleHeight(newWidth: number):void{
        this.height= newWidth / this.aspectRatio;
    }
     /**
     * Sets the new width based on a desired height.
     */
    getScaledWidth(newHeight: number): void {
        this.width= newHeight * this.aspectRatio;
    }
    /**
     *Scale the image by its dimensions, IE scale by 2 effectively quadruples area.
     */
    scaleDimensions(scaleRatio:number): void{
        this.setDimensions(this.width * scaleRatio, this.height * scaleRatio)
    }
     /**
     *Scale the image by its area.
     */
    scaleArea(scaleRatio: number): void {
        let newArea: number = this.width * this.height * 2;
        let newHeight: number = Math.sqrt(newArea / this.aspectRatio);
        let newWidth: number = newHeight * this.aspectRatio;
        this.width = newWidth;
        this.height = newHeight;
    }
}
export { AR };

