<template>
  <div class="light-blue pa1 pa5-l">




    <TopographicVisual class="w-100 z-1" />

    <!-- this is a background gradient that goes from black to transparent at the top of the screen (it does not move) -->
    <div id="top-bg-gradient" class="fixed top-0 left-0 w-100 vh-100 z-0"></div>

    <div class="vh-50 w-100 w-90-ns pa4 mt6">
      <!-- <h3 class="w-100 f3 fw4 tc mv0 pv1 teal">Wave of Hope</h3> -->
      <h1 class="f-headline tl light-blue mv0 pa3 ph5-l">
        <span class="fw4">Hope Blooms Underwater:</span> <br />The Coral Reefs Defying Climate Change
      </h1>

      <div class="">
        <div class="measure-wide fw6 lh-title pb5 light-blue mv5 ph5-l" :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, scale: 1 }" :delay="500">
          <p class="f2">Nestled beneath the ocean waves, some coral reefs are defying the odds, challenging standard
            climate predictions.</p>
        </div>
      </div>

      <!-- add some stars floating at the top -->
      <div id="stars" class="vh-50 absolute top-0 left-0 w-100 pa5">
        <img src="svg/stars.svg" alt="stars" class="w-100 h-100" />
      </div>

      <div id="floating-nav" class="pa2 f6 br2 fixed">
        <h4 class="ma0 pa0 ttu white ph2 o-60">Navigation</h4>
        <ul class="pa0 mt2 mb0 list light-blue fw5">
          <li class="mv0 pa2 br2">Introduction</li>
          <li class="mv0 pa2 br2 active">Global temperature rise</li>
          <li class="mv0 pa2 br2">Impact on world and oceans</li>
          <li class="mv0 pa2 br2">Ocean reef percentage</li>
          <li class="mv0 pa2 br2">Reef type breakdown</li>
          <li class="mv0 pa2 br2">Reef type: resist</li>
          <li class="mv0 pa2 br2">Reef type: recover</li>
          <li class="mv0 pa2 br2">Reef type: avoid</li>
          <li class="mv0 pa2 br2">Explore them all</li>
          <li class="mv0 pa2 br2">Call to action</li>
        </ul>
      </div>
    </div>


    <div id="intro-cta" class="mv0" style="margin-top: 33vh;">
      <p class="measure-wide f3 fw7 teal tc center">
        Understand how these resilient ecosystems are resisting, avoiding, and recovering from climate change.
      </p>
      <!-- down arrow -->
      <img src="svg/down_arrow.svg" alt="down arrow" class="h3 center db" />
    </div>


    <div id="intro-bg">

    </div>

    <div id="intro-visual" class="w-100">
      <div id="cloud-1" class="cloud vh-25">
        <img src="svg/cloud.svg" alt="cloud" class="w-100 h-100" />
      </div>
      <div id="cloud-2" class="cloud vh-25">
        <img src="svg/cloud.svg" alt="cloud" class="w-100 h-100" />
      </div>
      <div id="cloud-3" class="cloud vh-25">
        <img src="svg/cloud.svg" alt="cloud" class="w-100 h-100" />
      </div>

      <div id="stars"></div>

      <div id="ocean-waves" class="vh-25">
        <img src="svg/waves.svg" alt="ocean waves" class="" />
      </div>
    </div>




    <div id="surface-of-water">
    </div>

    <div class="o-70" style="margin-top: -50px;">
      <!-- beautiful coral reef photography -->
      <img src="images/EmilyDarling.Fiji.2019%20%20(6)_transparent.png" alt="coral reef" class="br4 z-0" />
    </div>

    <!-- The tachyons class to make flex items go to the bottom of the container is "flex flex-column justify-end items-center" -->
    <div id="section-1 cf" class="w-100 w-90-l pa1 pa5-l section v-mid flex flex-row justify-center items-end">
      <div class="w-100 w-50-ns flex-item">
        <h1>What Different Climate Scenarios Mean for Global Temperature</h1>


        <div>
          <img src="svg/global_temp_rise_chart.svg" />
        </div>
      </div>

      <div class="w-100 w-50-ns flex-item pa2 pa5-l">
        <p>
          The rising global temperatures challenge life as we know it, but beneath the ocean's surface, an unprecedented
          phenomenon is occurring.
        </p>
        <p>
          Coral reefs, in defiance of escalating odds, are writing their own survival story.
        </p>
      </div>
    </div>

    <div id="section-2" class="section cf w-100 w-90-l pa1 pa5-l">
      <div>
        <h2 class="pv4 teal">The impact of climate change is clear...</h2>
      </div>
      <div class="w-100 mv4 pv4">
        <h2 class="ma0 pa0 fw1">Impact on the world</h2>
        <ul>
          <li>More frequent and intense heatwaves</li>
          <li>Increased frequency of wildfires</li>
          <li>Changes in crop yields</li>
          <li>Increased intensity of tropical storms</li>
          <li>Spread of vector-borne diseases</li>
        </ul>
      </div>

      <!-- make a spacer div with 50% width -->
      <div class="w-100 w-50-ns fl-ns">&nbsp;</div>

      <div class="w-100 w-50-ns fl-ns mt3 pt4">
        <h2 class="ma0 pa0 fw1">Impact on our oceans</h2>
        <ul>
          <li><a href="https://indonesia.wcs.org/en-us/Initiatives/Marine/Coral-Bleaching.aspx">Coral bleaching events</a>
          </li>
          <li><a href="https://www.fisheries.noaa.gov/insight/understanding-ocean-acidification">Ocean acidification</a>
          </li>
          <li>Disruption of marine food chains</li>
          <li>Altered ocean currents</li>
          <li>Loss of coastal habitats due to rising sea levels</li>
        </ul>
      </div>
    </div>

    <div id="section-3" class="section w-100 cf flex flex-row justify-center items-center w-100 w-90-l pa1 pa5-l">
      <div class="w-100 w-50-ns">
        <h1 class="pr1 pr4-l">Where Ocean Life Thrives</h1>
      </div>

      <div class="w-50 fl">
        <p>Reefs, found in <a
            href="https://www.fisheries.noaa.gov/national/habitat-conservation/shallow-coral-reef-habitat#:~:text=Reefs%20occur%20in%20less%20than,%2C%20sea%20turtles%2C%20and%20more.">less
            than 1 percent of the ocean</a>, are incredibly important as they house nearly one-quarter of all marine
          species.</p>

        <p>
          Corals are the perfect spot for ocean life to find food, shelter, and raise the next generation. This boosts
          fishery productivity, sustaining millions of people with protein-rich food. But coral reefs are more than
          aquatic supermarkets. They serve as buffers, absorbing wave energy, protecting our coastlines from storms and
          erosion.
        </p>

        <p>
          Economically too, they're worth billions, driving tourism in many countries.
        </p>

        <p>With ocean temperatures rising due to climate change, they are under threat.</p>

      </div>
    </div>

    <div class="section w-100 cf flex flex-row justify-center items-center w-100 w-90-l pa1 pa5-l">
      <div class="w-100 w-two-thirds-ns bg-transparent-white pa3">
        <h1 class="pr1 pr4-l f2 fw2 tc">Our understanding is evolving</h1>
        <img src="svg/environmental_conditions.svg" alt="reef evolution" class="w-100" />
      </div>

      <div class="w-third fl pa4">
        <p>Previous models used to understand how Coral Reefs survive were based only a single environmental condition,
          but
          <strong class="white">newer models incorporate over 25</strong>.
        </p>
        <p> This high-definition understanding gives us a much better view of what is
          happening to reefs around the world, and what we can do to help.
        </p>
      </div>
    </div>

    <div class="pa1 pa5-l">
      <div class="pa3 pa5-l lh-copy f2 measure">
        <p>We've identified that there are not just one, but <strong>three</strong> distinct types of coral reefs, each
          responding to climate change in a variety of remarkable ways.
        </p>
        <p> This multifaceted way of understanding brings with it profound implications for conservation efforts, enabling
          us to tailor our strategies to the unique needs and resilience patterns of each reef type. </p>
      </div>
    </div>



    <ReefTypeModule class="w-100 w-80-ns pa4" :title="'Avoid'" :headline="`Avoid Refugia: The Nature's Cool Zones`"
      :copy="`In the ocean's vast expanse, certain reefs have found their survival tactics by dwelling in areas with less heat impact. Known as 'Avoid Refugia', these reefs represent natural sanctuaries from the warming trends of climate change. Despite their small number, they uphold significant biodiversity, symbolizing resilience amidst adversity.`"
      :locations="[{
        name: 'South Africa',
        lat: '-34.397',
        lng: '150.644',
      },
      {
        name: 'Western Phillipines',
        lat: '12.879',
        lng: '121.774',
      },
      {
        name: 'Southern Great Barrier Reef',
        lat: '-24.397',
        lng: '150.644',
      },
      {
        name: 'Hawaii',
        lat: '19.8968',
        lng: '-155.5828',
      },
      {
        name: 'Mesoamerican Reef',
        lat: '20.8968',
        lng: '-85.5828',
      },
      {
        name: 'Eastern Colombia',
        lat: '11.8968',
        lng: '-75.5828',
      }
      ]" />


    <ReefTypeModule class="w-100 w-80-ns pa4" :title="'Recover'" :headline="`Recover Refugia: The Oceanic Phoenix`"
      :copy="`The 'Recover Refugia' embody the ocean’s incredible power of recovery. Even when battered by high temperatures or severe storms, these reefs display an astounding ability to regenerate and restore themselves. They represent nature's promise of renewal and restoration, reinforcing the critical need for proactive marine conservation efforts.`"
      :locations="[{
        name: 'Maldives',
        lat: '-34.397',
        lng: '150.644',
      },
      {
        name: 'Northern Japan',
        lat: '12.879',
        lng: '121.774',
      },
      {
        name: 'New Caledonia',
        lat: '-24.397',
        lng: '150.644',
      },
      {
        name: 'Southeast Mauritius',
        lat: '19.8968',
        lng: '-155.5828',
      },
      {
        name: 'Belize',
        lat: '20.8968',
        lng: '-85.5828',
      },
      {
        name: 'Guatemala',
        lat: '11.8968',
        lng: '-75.5828',
      }
      ]" />

    <ReefTypeModule class="w-100 w-80-ns pa4" :title="'Resist'" :headline="'Resist Refugia: The Heat Endurers'"
      :copy="`Adaptation is nature's survival strategy and the 'Resist Refugia' stand as a testament to this. These coral reefs exhibit an evolved tolerance to increased temperatures. Their ability to thrive despite the thermal stress illustrates nature’s stunning resilience and the diverse marine life they support is a powerful reminder of why we must fight for our oceans.`"
      :locations="[{
        name: 'Northwest Mauritius',
        lat: '-34.397',
        lng: '150.644'
      },
      {
        name: 'Bay of Cartagena',
        lat: '12.879',
        lng: '121.774'
      },
      {
        name: 'Gulf of Mannar',
        lat: '-24.397',
        lng: '150.644'
      },
      ]" />





    <div id="section-4" class="section w-80 cf z-2 pa4">
      <h2 class="f1 teal tc">Reefs by type</h2>
      <!-- <div class="cf">
        <div class="reef-type w-third fl">Resist</div>
        <div class="reef-type w-third fl">Recover</div>
        <div class="reef-type w-third fl">Avoid</div>
      </div> -->
      <div class="bg-transparent-black">
        <img src="svg/refuge_types.r2.svg" alt="reef type breakdown" class="w-100 z-2" />
      </div>
    </div>

    <div class="pa1 pa5-l">
      <div class="pa3 pa5-l lh-copy f2 measure">
        <h1 class="f1">What now?</h1>
        <p>
          What countries are currently doing...
        </p>
        <p>
          How many reefs have yet to be found...
        </p>
      </div>
    </div>



    <div id="section-6" class="section w-100 w-80-ns pa1 pa3-l">
      <div id="section-7" class="section pa1 pa5-l">
        <h2 class="f1 mv0 pv0">Help</h2>
        <div class="measure-wide white f2 pv5">
          There's two ways that you can help. You can sign on to a letter that WCS will deliver to UN letters, or reach
          out to join our new global partnership of experts.
        </div>

        <div class="w-100 cf tc">
          <div class="w-100 w-50-ns dib bg-transparent-white pa4">
            <div class="pa4">
              <div class="pv4 f1 white b">
                Sign on to the WCS letter to save ocean biodiversity
              </div>
              <img src="svg/down_arrow.svg" alt="down arrow" class="h3 center db" />
              <button class="w-100 pa2 tc mv4 bg-black white br2 ba b--white bw2">Sign on</button>
            </div>

          </div>
          <div class="w-100 w-50-ns dib pa4 v-bottom">
            <div class="bg-transparent-white pa4">
              <div class="pv4 f1 white b">
                Scientist or funder?
              </div>
              <img src="svg/down_arrow.svg" alt="down arrow" class="h3 center db" />
              <button class="w-100 pa2 tc mv4 bg-black white br2 ba b--white bw2">Join us</button>
            </div>


          </div>
        </div>
        <!-- <div class="mv5 pa5 f1">
          <form action="">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
            <button type="submit">Sign up</button>
          </form>
        </div> -->
      </div>


      <!-- <iframe width="100%" height="600" frameborder="0" title="Felt Map"
        src="https://felt.com/embed/map/Coral-Reefs-Y1O4GeEVRVuGF7EJN49AZxC?loc=-1.04,114.89,3z"></iframe> -->

    </div>

    <div class="cf">
      <h2 class="mv0 pa2 ph5-l f2 f1-l">Explore the world's reefs</h2>

      <div class="w-100 bg-transparent-white">
        <div class="flex flex-column justify-center items-center">
          <SpinnyGlobe @update:bcu="selectedBCUID = $event" />
        </div>
      </div>

      <div class="cf w-80 pt3">
        <div class="w-20 fl pa2 pa4-l">
          <h2 class="pa0 ma0">Metadata</h2>
          <h2 class="yellow">{{ selectedBCUID }}</h2>
          <ul class="list pa0 f6">
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <!-- <li><strong>Item:</strong> Value</li>
              <li><strong>Item:</strong> Value</li>
              <li><strong>Item:</strong> Value</li>
              <li><strong>Item:</strong> Value</li>
              <li><strong>Item:</strong> Value</li>
              <li><strong>Item:</strong> Value</li> -->
          </ul>
        </div>

        <div class="w-80 fl overflow-x-auto pa1 ph5-l">
          <h3>Coral reefs around the world</h3>
          <table class="h2 w-100 f7 overflow-x-auto collapse bg-white near-black  overflow-y-auto">
            <thead>
              <tr class="tl bg-black white">
                <th class="pa2">Name</th>
                <!-- <th class="pa2">Location</th>
                  <th class="pa2">Country</th>
                  <th class="pa2">Region</th>
                  <th class="pa2">Size</th> -->
                <th class="pa2">Description</th>
                <th class="pa2">Refugia Type</th>
              </tr>
            </thead>
            <tbody>
              <!-- just make 20 example reefs -->
              <tr v-for="reef in reefs" :key="i" :style="{
                backgroundColor: i === 7 ? '#CCC' : '',
              }" class="stripe-dark">
                <td class="pa2">{{ reef.Location }}</td>
                <!-- <td class="pa2">Location {{ i }}</td>
                  <td class="pa2">Country {{ i }}</td>
                  <td class="pa2">Region {{ i }}</td>
                  <td class="pa2">Size {{ i }}</td> -->
                <td class="pa2"> {{ reef.Description }}</td>
                <td class="pa2"> {{ reef['Refugia type'] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div id="credits" class="o-90 vh-50" style="margin-top: 80vh;">
      <h3 class="tc o-70">
        A project from
      </h3>

      <!-- /logos/WCS_SEAL_ACRONYM-White stroke.png -->
      <div class="flex flex-row justify-center items-center">
        <img src="logos/WCS_SEAL_ACRONYM-White%20stroke.png" alt="WCS logo" class="h4" />

        <img src="logos/BP_Ocean_Initiative_logo_Stacked_White.png" alt="NOAA logo" class="h4" />
        <a href="https://room302.studio" class="dim ml2">
          <img src="logos/room302_logo_whiteonalpha.png" class="h4" />
        </a>

      </div>

    </div>
  </div>
</template>
<script setup>
import * as d3 from 'd3'
const selectedBCUID = ref(null);

/* load CSV from public/Table 1 from Conservation Biology2023.pdf - Sheet1.csv for table */
const reefs = ref([]);

onMounted(async () => {
  // use d3 to load the csv
  const data = await d3.csv("/Table 1 from Conservation Biology2023.pdf - Sheet1.csv");

  reefs.value = data;
});


// watch selectedBCUID and console.log it with an emoji
watch(selectedBCUID, (newValue) => {
  console.log("🌎", newValue);
});
</script>
<style>
.section {
  min-height: 52vh;
  margin-top: 29vh;
  margin-bottom: 29vh;
}
</style>
<style scoped>
#intro-visual {
  z-index: -1;
  pointer-events: none;
}


#top-bg-gradient {
  /* background: linear-gradient(180deg, rgba(9, 26, 43, 1) 0%, rgba(0, 103, 148, 0) 96.1%); */
  background: linear-gradient(180deg, rgba(9, 26, 43, 1) 0%, rgba(0, 103, 148, 0) 96.1%);
  top: -24vh;
  height: 100vh;
  z-index: -1;
}


@keyframes cloudAnimation {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(110%);
  }
}



#cloud-1 img {
  transform: scaleX(-1) scale(2);
}

#stars {
  pointer-events: none;
}

.cloud {
  position: absolute;
  /* Adjust the value to increase or decrease the vertical offset */
  animation: cloudAnimation linear infinite;
  animation-duration: 145s;
  animation-delay: 0s;
  opacity: 0.8;
}

#cloud-1 {
  width: 80%;
  z-index: 1;
  top: 32vh;
  /* scale up by 100% and flip horizontally */
  animation-delay: -25s;
}

#cloud-2 {
  transform: scaleX(-1);
  width: 70%;
  z-index: 2;
  animation-delay: -2s;
  top: 44vh;
  animation-duration: 100s;

}

#cloud-2 img {
  transform: scale(0.8);
}

#cloud-3 {
  width: 40%;
  left: 80%;
  z-index: 3;
  animation-delay: -10s;
  top: 58vh;
  animation-duration: 90s;
}

#ocean-waves {
  position: absolute;
  left: 0;
  /* bottom: -150px; */
  /* bottom: 150px; */
  bottom: -18%;
  width: 100vw;
  z-index: 2;
}

#ocean-waves img {
  width: 100%;
}

#intro-bg {
  /* background: linear-gradient(180deg, rgba(9, 26, 43, 0) 0%, rgba(0, 103, 148, 0.8) 96.1%); */
  /* make svg/sky_glow.svg the background */
  background: url(svg/sky_glow.png) no-repeat;
  /* but attach it to the bottom of the page */
  background-position: bottom;
  /* and make it cover the whole page */
  background-size: cover;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}

#floating-nav.fixed {
  position: fixed;
  /* top: 1rem; */
  top: 12vh;
  right: 1rem;
  z-index: 100;
  width: 12%;
}

/* use caret svg for list items */
ul li {
  list-style-type: none;
}

ul li::before {
  content: url("/svg/caret.svg");
  margin-right: 1rem;
  font-size: 0.8rem;
  height: 0.5rem;
  width: 0.5rem;
}

/* but disable on the floating nav */
#floating-nav ul li::before {
  content: none;
}</style>