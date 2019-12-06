import React from "react"

const Footer = () => {
  return (
    <section id="flexbox" class="section">
      <h3 class="section__heading--1">Flexbox</h3>
      <p class="section__paragraph">
        The Flexible Box Layout Module, allows you to easily generate a
        responsive design without using positioning and float.
      </p>

      <h4 class="section__heading--2">display</h4>
      <p class="section__paragraph">
        In this case I have a <b>div</b> with a class name:
        <b>container</b> with 4 boxes (flex items). I set to the class
        <b>container</b> (flex container) this properties that trasform the div
        to a block-level flex container box.
      </p>
      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>

      <h4 class="section__heading--2">flex-direction</h4>
      <p class="section__paragraph">
        This property sets how flex items are placed in the flex container.
      </p>
      <div class="section__example section__example--default">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>flex-direction: row;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>
      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>flex-direction: row-reverse;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--row-reverse">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>
      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>flex-direction: column;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--column">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>
      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>flex-direction: column-reverse;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--column-reverse">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>

      <h4 class="section__heading--2">flex-wrap</h4>
      <p class="section__paragraph">
        This property sets whether flex items are forced onto one line or can
        wrap onto multiple lines.
      </p>
      <div class="section__example section__example--default">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; flex-direction: row; <br />
          &ensp; <strong>flex-wrap: nowrap</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--nowrap">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
            <div class="flexbox__box">5</div>
            <div class="flexbox__box">6</div>
          </div>
        </div>
      </div>
      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; flex-direction: row; <br />
          &ensp; <strong>flex-wrap: wrap</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--wrap">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
            <div class="flexbox__box">5</div>
            <div class="flexbox__box">6</div>
          </div>
        </div>
      </div>
      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; flex-direction: row; <br />
          &ensp; <strong>flex-wrap: wrap-reverse</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--wrap-reverse">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
            <div class="flexbox__box">5</div>
            <div class="flexbox__box">6</div>
          </div>
        </div>
      </div>

      <h4 class="section__heading--2">flex-flow</h4>
      <p class="section__paragraph">
        This property is a shorthand property for flex-direction and flex-wrap.
      </p>
      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>flex-flow: row wrap-reverse;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--flow">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
            <div class="flexbox__box">5</div>
            <div class="flexbox__box">6</div>
          </div>
        </div>
      </div>

      <h4 class="section__heading--2">justify-content</h4>
      <p class="section__paragraph">
        This property defines how the browser distributes space between and
        around content items.
      </p>
      <div class="section__example section__example--default">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>justify-content: flex-start;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>

      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>justify-content: flex-end;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--justify-end">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>

      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>justify-content: center;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--justify-center">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>

      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>justify-content: space-between;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--justify-between">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>

      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>justify-content: space-around;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--justify-around">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>

      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>justify-content: space-evenly;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--justify-evenly">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>

      <h4 class="section__heading--2">align-items</h4>
      <p class="section__paragraph"></p>
      <div class="section__example section__example--default">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>align-items: stretch;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--align">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>

      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>align-items: flex-start;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--align flexbox__container--align-start">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>

      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>align-items: flex-end;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--align flexbox__container--align-end">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>

      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>align-items: flex-center;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--align flexbox__container--align-center">
            <div class="flexbox__box">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>

      <div class="section__example">
        <div class="section__code">
          .container {`{`} <br />
          &ensp; display: flex; <br />
          &ensp; <strong>align-items: baseline;</strong> <br />
          {`}`}
        </div>
        <div class="section__box">
          <div class="flexbox__container flexbox__container--align flexbox__container--align-baseline">
            <div class="flexbox__box flexbox__box--height">1</div>
            <div class="flexbox__box">2</div>
            <div class="flexbox__box flexbox__box--height">3</div>
            <div class="flexbox__box">4</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
