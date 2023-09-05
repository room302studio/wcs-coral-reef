<template>
  <div class="pa5 pr6">
    <div class="vh-50 w-100 pa4">
      <h1>Intro Title</h1>
    </div>

    <div id="floating-nav" class="fixed right-1 top-1 bg-white pa2 w-10 f6">
      <h4 class="ma0 pa0">Navigation</h4>
      <ul class="pa0 mt2 mb0 list">
        <li class="mv2">Introduction</li>
        <li class="mv2">Global temperature rise</li>
        <li class="mv2">Impact on world and oceans</li>
        <li class="mv2">Ocean reef percentage</li>
        <li class="mv2">Reef type breakdown</li>
        <li class="mv2">Reef type: resist</li>
        <li class="mv2">Reef type: recover</li>
        <li class="mv2">Reef type: avoid</li>
        <li class="mv2">Explore them all</li>
        <li class="mv2">Call to action</li>
      </ul>
    </div>

    <div class="cf">
      <div class="measure fl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
        similique ratione ex explicabo soluta ab fuga minima, qui nobis omnis
        doloribus unde magni quod modi quos! Porro necessitatibus eveniet
        voluptates!
      </div>
    </div>

    <div id="surface-of-water">
      <hr />
    </div>

    <div id="section-1 cf" class="section">
      <div class="w-two-thirds fl">
        <h1>Chart of global temp rise</h1>
      </div>

      <div class="w-third fl">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          libero provident dolorem excepturi minus quaerat quasi assumenda optio
          quod eveniet, voluptatum pariatur ducimus facere, consequatur
          reiciendis ea vero aliquam nam.
        </p>
      </div>
    </div>

    <div id="section-2" class="section cf">
      <div class="w-50 fl">
        <h2 class="ma0 pa0">Impact on world</h2>
        <ul>
          <li>Impact 1</li>
          <li>Impact 2</li>
          <li>Impact 3</li>
          <li>Impact 4</li>
        </ul>
      </div>

      <div class="w-50 fl">
        <h2 class="ma0 pa0">Impact on oceans</h2>
        <ul>
          <li>Impact 1</li>
          <li>Impact 2</li>
          <li>Impact 3</li>
          <li>Impact 4</li>
        </ul>
      </div>
    </div>

    <div id="section-3" class="section w-100 cf">
      <div class="w-50 fl">
        <h1>Ocean/reef percentage</h1>
      </div>

      <div class="w-50 fl">TK% of the world's oceans are Coral Reefs</div>
    </div>

    <div id="section-4" class="section w-100 cf">
      <h2>Reef type breakdown</h2>
      <div class="h5 ba b--black bw3 w-100"></div>
      <div class="cf">
        <div class="reef-type w-third fl">Resist</div>
        <div class="reef-type w-third fl">Recover</div>
        <div class="reef-type w-third fl">Avoid</div>
      </div>
    </div>

    <ReefTypeModule class="ba b--black pa4" :title="'Resist'" />

    <ReefTypeModule class="ba b--black pa4" :title="'Recover'" />

    <ReefTypeModule class="ba b--black pa4" :title="'Avoid'" />

    <div id="section-6" class="section w-100">
      <h2>Explore them all</h2>
      <iframe
        width="100%"
        height="600"
        frameborder="0"
        title="Felt Map"
        src="https://felt.com/embed/map/Coral-Reefs-Y1O4GeEVRVuGF7EJN49AZxC?loc=-1.04,114.89,3z"
      ></iframe>
      <div class="cf">
        <div class="w-50 ba b--black fl">
          <div class="flex flex-column justify-center items-center h-100">
            <h3>Spinny globe</h3>
            <SpinnyGlobe />
          </div>
        </div>

        <div class="w-50 fl ph5">
          <h2 class="pa0 ma0">Metadata</h2>
          <ul class="list pa0">
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
          </ul>
        </div>

        <div class="w-100">
          <h3>Table of reefs</h3>
          <table class="w-100 f5">
            <thead>
              <tr class="tl bg-black white">
                <th class="pa2">Reef</th>
                <th class="pa2">Location</th>
                <th class="pa2">Country</th>
                <th class="pa2">Region</th>
                <th class="pa2">Size</th>
                <th class="pa2">Threat</th>
              </tr>
            </thead>
            <tbody>
              <!-- just make 20 example reefs -->
              <tr
                v-for="i in 20"
                :key="i"
                :style="{
                  backgroundColor: i === 7 ? '#CCC' : '',
                }"
              >
                <td>Reef {{ i }}</td>
                <td>Location {{ i }}</td>
                <td>Country {{ i }}</td>
                <td>Region {{ i }}</td>
                <td>Size {{ i }}</td>
                <td>Threat {{ i }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="section-7" class="section">
        <h2>Call to action</h2>
        <div class="measure-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos saepe
          ducimus natus accusamus beatae error reprehenderit corrupti! Nulla
          beatae, sed perferendis nisi labore perspiciatis. Suscipit sit maiores
          placeat error libero.
        </div>

        <!-- email sign up form -->
        <div>
          <form action="">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
            <button type="submit">Sign up</button>
          </form>
        </div>

        <div class="w-100 cf">
          <div class="w-third fl">
            <h2 class="f1">Gov</h2>
            <div>arrow</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              sequi iusto at perferendis quaerat explicabo ut. Quod ducimus
              doloremque odio, et maxime officia odit, magnam ea pariatur
              debitis deserunt commodi?
            </div>
            <button>CTA</button>
          </div>
          <div class="w-third fl">
            <h2 class="f1">Funders</h2>
            <div>arrow</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              sequi iusto at perferendis quaerat explicabo ut. Quod ducimus
              doloremque odio, et maxime officia odit, magnam ea pariatur
              debitis deserunt commodi?
            </div>
            <button>CTA</button>
          </div>
          <div class="w-third fl">
            <h2 class="f1">Scientists</h2>
            <div>arrow</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              sequi iusto at perferendis quaerat explicabo ut. Quod ducimus
              doloremque odio, et maxime officia odit, magnam ea pariatur
              debitis deserunt commodi?
            </div>
            <button>CTA</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
