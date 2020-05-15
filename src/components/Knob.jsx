import React from 'react'
import './Knob.css'

const getAngle = (mouseX, mouseY, pts) => {
    const x = mouseX - pts.x;
    const y = mouseY - pts.y;
    let deg = Math.atan(y / x) * 180 / Math.PI;
    if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
        deg += 90;
    } else {
        deg += 270;
    }
    return deg
    // return Math.min(Math.max(this.startAngle, deg), this.endAngle);
};


export const Knob = () => {
    const startDrag = e => {
        e.preventDefault();

        const knob = e.target.getBoundingClientRect()
        const center = {
            x: knob.left + knob.width / 2,
            y: knob.top + knob.height / 2
        }

        const dragging = e => {
                let currentAngle = getAngle(e.clientX, e.clientY, center)
                console.log(currentAngle)
                // if (this.currentDeg === this.startAngle) this.currentDeg--

        }

        // const moveHandler = e => {
        //     this.currentDeg = this.getDeg(e.clientX, e.clientY, pts);
        //     if (this.currentDeg === this.startAngle) this.currentDeg--;
        //     let newValue = Math.floor(
        //         this.convertRange(
        //             this.startAngle,
        //             this.endAngle,
        //             this.props.min,
        //             this.props.max,
        //             this.currentDeg
        //         )
        //     );
        //     this.setState({ deg: this.currentDeg });
        //     this.props.onChange(newValue);
        // };
        document.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", dragging)
        })
    };


    return <div className="knob" onMouseDown={startDrag}>
        {/*<div className="ticks">*/}
        {/*    {this.props.numTicks*/}
        {/*        ? this.renderTicks().map((tick, i) => (*/}
        {/*            <div*/}
        {/*                key={i}*/}
        {/*                className={*/}
        {/*                    "tick" + (tick.deg <= this.currentDeg ? " active" : "")*/}
        {/*                }*/}
        {/*                style={tick.tickStyle}*/}
        {/*            />*/}
        {/*        ))*/}
        {/*        : null}*/}
        {/*</div>*/}
        <div className="knob outer">
            <div className="knob inner">
                <div className="indicator"/>
            </div>
        </div>
    </div>
}

export default Knob