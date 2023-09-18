<template>
  <div class="light-blue pa1 pa5-l" id="top">
    <TopographicVisual class="w-100 z-1" />
    <div id="top-bg-gradient" class="fixed top-0 left-0 w-100 vh-100 z-0"></div>
    <div class="vh-50 w-100 w-90-ns pa4 mt6">
      <!-- <h3 class="w-100 f3 fw4 tc mv0 pv1 teal">Wave of Hope</h3> -->
      <h1 class="f2 f-headline-l tl light-blue mv0 pa3 ph5-l">
        <span class="fw4">Hope Blooms Underwater:</span> <br />The Coral Reefs Defying Climate Change
      </h1>

      <div class="">
        <div class="measure-wide fw6 lh-title pb5 light-blue mv5 ph5-l">
          <p class="f4 f2-l">Nestled beneath the ocean waves, some coral reefs are defying the odds, challenging standard
            climate predictions.</p>
        </div>
      </div>

      <!-- add some stars floating at the top -->
      <div id="stars" class="vh-50 absolute top-0 left-0 w-100 pa5">
        <img :src="`/svg/stars.svg`" alt="stars" class="w-100 h-100" />
      </div>

      <div id="floating-nav" class="pa2 f6 br2 fixed dn db-l">
        <h4 class="ma0 pa0 ttu white ph2 o-60">Navigation</h4>
        <ul class="pa0 mt2 mb0 list light-blue fw5">
          <li v-for="(section, index) in sections" :key="index" class="mv0 pa2 br2"
            :class="{ active: isSectionVisible[index] }" ref="listItems">
            <!-- {{ section.title }} -->
            <a class="ttc" :href="`#${section.id}`">{{ section.title }}</a>

          </li>
        </ul>
      </div>
    </div>

    <div id="intro-cta" ref="intro" class="mv0" style="margin-top: 33vh;">
      <p class="measure-wide f5 f3-l fw7 teal tc center">
        Understand how these resilient ecosystems are resisting, avoiding, and recovering from climate change.
      </p>
      <!-- down arrow -->
      <img :src="`/svg/down_arrow.svg`" alt="down arrow" class="h3 center db" />
    </div>

    <div id="intro-bg"></div>

    <div id="intro-visual" ref="introvisual" class="">
      <div id="cloud-1" class="cloud vh-25">
        <img :src="`/svg/cloud.svg`" alt="cloud" class="w-100 h-100" />
      </div>
      <div id="cloud-2" class="cloud vh-25">
        <img :src="`/svg/cloud.svg`" alt="cloud" class="w-100 h-100" />
      </div>
      <div id="cloud-3" class="cloud vh-25">
        <img :src="`/svg/cloud.svg`" alt="cloud" class="w-100 h-100" />
      </div>

      <div id="stars"></div>

      <div id="ocean-waves" class="vh-25">
        <img :src="`/svg/waves.svg`" alt="ocean waves" class="" />
      </div>
    </div>

    <div id="surface-of-water"></div>

    <div class="o-70" style="margin-top: -50px;">
      <!-- beautiful coral reef photography -->
      <img :src="`/images/EmilyDarling.Fiji.2019_transparent.png`" alt="coral reef" class="br4 z-0" />
    </div>

    <!-- The tachyons class to make flex items go to the bottom of the container is "flex flex-column justify-end items-center" -->
    <div ref="globaltemp" id="section-1"
      class="w-100 w-90-l pa1 pa5-l section v-mid flex-ns flex-row justify-center items-end">
      <div class="w-100 w-50-ns flex-item">
        <h1 class="f1">What Different Climate Scenarios Mean for Global Temperature</h1>

        <div>
          <img :src="`/svg/global_temp_rise_chart.svg`" />
        </div>
      </div>

      <div class="w-100 w-50-ns flex-item pa2 pa5-l">
        <p>
          Since the inception of global temperature monitoring a clear pattern of steady increase is evident. This rise in
          global temperatures is a challenge to life on Earth, including the life below our ocean's surface.
        </p>
        <p>
          <a href="https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_Chapter04.pdf">Shared Socioeconomic
            Pathways (SSP)</a> scenarios predict future conditions based on current socioeconomic trends.
        </p>
        <p>
          Amidst this, a remarkable event is playing out. Coral reefs, despite the increasingly challenging conditions,
          are scripting their own tales of survival. Our task is to ensure these stories of resilience continue.
        </p>

      </div>
    </div>

    <div id="section-2" ref="climateimpact" class="section cf w-100 w-90-l pa1 pa5-l">
      <div>
        <h2 class="pv4 teal">The impact of climate change is clear...</h2>
      </div>
      <div class="w-100 mv4 pv4">
        <h2 class="ma0 pa0 fw1">Impact on the world</h2>
        <ul>
          <li>More frequent and intense heatwaves above and underwater</li>
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

    <div id="section-3" ref="oceanlifethrives"
      class="section w-100 cf flex-ns flex-row justify-center items-center w-100 w-90-l pa1 pa5-l">
      <div class="w-100 w-50-ns">
        <h1 class="pr1 pr4-l">Where Ocean Life Thrives</h1>
      </div>

      <div class="w-100 w-50-ns fl-ns">
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

    <div id="section-4" ref="evolvingunderstanding"
      class="section w-100 cf flex-ns flex-row justify-center items-center w-100 w-90-l pa1 pa5-l">
      <div class="w-100 w-two-thirds-ns bg-transparent-white pa3">
        <h1 class="pr1 pr4-l f2 fw2 tc">Our understanding is evolving</h1>
        <img :src="`/svg/environmental_conditions.svg`" alt="reef evolution" class="w-100" />
      </div>

      <div class="w-100 w-third-ns fl-ns pa4 f4 measure">
        <p>Previous models used to understand how Coral Reefs survive were based only a single environmental condition,
          but
          <strong class="white">newer models incorporate over 25</strong>.
        </p>

        <p>The new models consider various geological, environmental, and human-interaction factors like depth, sea
          surface temperature, concentration of different substances in water, visitation values, various types of
          connectivity, travel time metrics, fishery management, and even the effect of gravity.
        </p>
        <p> This high-definition understanding gives us a much better view of what is
          happening to reefs around the world, and what we can do to help.
        </p>
      </div>
    </div>

    <div id="section-5" ref="threedistinct" class="pa1 pa5-l">
      <div class="pa3 pa5-l lh-copy f2 measure">
        <p>We've identified that there are not just one, but <strong>three</strong> distinct types of coral reefs, each
          responding to climate change in a variety of remarkable ways.
        </p>
        <p> This multifaceted way of understanding brings with it profound implications for conservation efforts, enabling
          us to tailor our strategies to the unique needs and resilience patterns of each reef type. </p>
      </div>
    </div>

    <ReefTypeModule id="section-6" ref="avoidrefugia" class="w-100 w-80-ns pa4" :title="'Avoid'"
      :headline="`Avoid Refugia: Rare Ocean 'Cool Spots'`" :headline-image="`/images/Emily%20Darling.Borneo.2018.jpg`"
      :copy="`In the ocean's vast expanse, certain reefs have been able to avoid the impacts of hot water thanks to being located in rare underwater ‘cool spots’. Known as 'Avoid Refugia', these reefs are natural sanctuaries from the warming trends of climate change, places where corals still thrive and massive, healthy reefs shelter huge troves of marine biodiversity.`"
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


    <ReefTypeModule id="section-7" ref="recoverrefugia" class="w-100 w-80-ns pa4" :title="'Recover'"
      :headline="`Recover Refugia: The Oceanic Phoenix`"
      :copy="`The 'Recover Refugia' embody our planet’s incredible capacity to heal and recover. Researchers are finding reefs all over the world that have bleached during warm water events, or been leveled by climate change induced mega storms, only to shock communities and scientists by recovering - growing back in record time where there was once only rubble.`"
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

    <ReefTypeModule id="section-8" ref="resistrefugia" class="w-100 w-80-ns pa4" :title="'Resist'"
      :headline="'Resist Refugia: The Adapters'"
      :copy="`Adaptation is nature's survival strategy. There are reefs all over the world that aren’t avoiding heat, but are actively resisting it. Evolved adaptations are allowing those corals to take hot water events in stride and defy bleaching and other impacts – a show of resilience in the face of rapid change.`"
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

    <div id="section-9" ref="reefsbytype" class="section w-100 w-80-l cf z-2 pa1 pa4-l">
      <h2 class="f1 teal mv0 pv2">Reefs by type</h2>
      <div>
        <p class="measure pv2">
          Coral reefs have truly astonishing adaptive capabilities, falling mainly into three categories: Avoidance,
          Resistance, and Recovery. These reefs either evade harsh conditions, endure them steadfastly, or rejuvenate
          after damage.
        </p>

        <p class="measure pv2">
          Despite our expanding knowledge, a significant portion of the ocean's reefs remain <strong
            class="white">unknown,</strong> hinting at undiscovered survival techniques that could help us better
          understand how to protect these ecosystems.
        </p>
      </div>
      <!-- <div class="cf">
        <div class="reef-type w-third fl">Resist</div>
        <div class="reef-type w-third fl">Recover</div>
        <div class="reef-type w-third fl">Avoid</div>
      </div> -->
      <div class="bg-transparent-black">
        <img src="/svg/refuge_types.r2.svg" alt="reef type breakdown" class="w-100 z-2" />
      </div>
    </div>

    <div id="section-10" ref="whatnow" class="pa1 pa5-l">
      <div class="pa3 pa5-l lh-copy f3 measure bg-transparent-black">
        <h1 class="f1 f-subheadline-l pv2 mv0 white">What now?</h1>
        <p class="measure pv3">
          Countries worldwide are waking up to the crisis facing coral reefs. Aiming to protect 30% of the earth's lands
          and oceans by 2030 - the "30x30" pledge - was one significant step taken during last year's global biodiversity
          summit. Coral reefs got a special mention for their vital role in ocean biodiversity. The Philippines has
          already set the pace, launching its national 30x30 initiative.
        </p>
        <p class="measure pv3">
          Contrary to the popular narrative of dying coral reefs, recent findings offer room for hope. The doom prediction
          rested on a single "excess heat" model, which, recent studies show, isn't sufficient to assess coral reef
          health. Environment factors such as oxygen levels and water cleanliness turn out to be more critical.
        </p>
        <p class="measure pv3">
          Given the new findings, there's a need for more sophisticated models to better predict the future of our oceans
          and reefs. By protecting and nurturing these climate-resistant reefs, we can give them a fighting chance against
          climate change.
        </p>

        <p class="measure pv3">
          The bottom line? Coral reefs aren't necessarily doomed. If we act decisively and intelligently now, we can still
          save our reefs.
        </p>
      </div>
    </div>



    <div id="section-11" ref="calltoaction" class="section w-100 w-80-ns pa1 pa3-l">
      <div class="pa1 pa5-l">
        <h2 class="f2 f1-l mv0 pv0">Our oceans are counting on us. Act for them now.</h2>
        <div class="measure-wide white f2 pv5">
          All of this comes down to one simple message: Despite what you’ve heard, if we act soon we can still save our
          reefs. Now that you understand how important each of these rare climate refuge reefs are, you can use your voice
          for good.
        </div>

        <div class="w-100 cf tc">
          <div class="w-100 w-third-ns dib pa1 pa2-l v-bottom">
            <div class="bg-transparent-black white br4 pa2 tl">
              <div class="pa2 pa3-l fw5 f5 lh-copy">
                Tell your government representatives loud and clear: <strong style="color: #5CF3E1;">coral reefs are
                  critical to biodiversity conservation
                  and climate adaptation</strong>. Sign on, and WCS will hand-deliver your signatures to international
                leaders and
                lawmakers at the UN Climate Change Conference and the Convention on Biological Diversity.
              </div>
              <img src="/svg/down_arrow.svg" alt="down arrow" class="h3 center db" />
              <button class="cta-button dim pointer w-100 pa2 mv4">Sign on</button>
            </div>
          </div>

          <div class="w-100 w-third-ns dib pa1 pa2-l v-bottom">
            <div class="bg-transparent-black white br4 pa2 tl">
              <div class="pa2 pa3-l fw5 f5 lh-copy">
                Scientists have only discovered about half of the coral reef refuges hidden underwater all over the world.
                We need to change that, and soon. Consider <strong style="color: #5CF3E1;">expanding your funding or
                  extending a hand in partnership to
                  help support the discovery of these climate-resilient coral reefs.</strong> Reach out to explore other
                ways to
                advance this work with us.
              </div>
              <img src="/svg/down_arrow.svg" alt="down arrow" class="h3 center db" />
              <button class="cta-button dim pointer w-100 pa2 mv4">Join us</button>
            </div>
          </div>

          <div class="w-100 w-third-ns dib pa1 pa2-l v-bottom">
            <div class="bg-transparent-black white br4 pa2 tl">
              <div class="pa2 pa3-l fw5 f5 lh-copy">
                Finding and protecting all of our coral reef refuges is a group effort. <strong style="color: #5CF3E1;">To
                  dive deeper into the data and
                  to contribute your own data, meet MERMAID.</strong> To join our collaborative global movement to find
                these reefs,
                reach out.
              </div>
              <img src="/svg/down_arrow.svg" alt="down arrow" class="h3 center db" />
              <button class="cta-button dim pointer w-100 pa2 mv4">Join us</button>
            </div>
          </div>
        </div>
      </div>

      <div class="white f1 f-subheadline-l i tc tracked-tight mv2 mt6-l">
        So much has been, and will be lost to climate change. But coral reefs <strong>aren’t lost yet</strong>.
        And if we act now, we can make sure they never are.
      </div>


      <!-- <iframe width="100%" height="600" frameborder="0" title="Felt Map"
        src="https://felt.com/embed/map/Coral-Reefs-Y1O4GeEVRVuGF7EJN49AZxC?loc=-1.04,114.89,3z"></iframe> -->

    </div>

    <div id="section-12" class="cf" ref="explorethemall">
      <h2 class="mv0 pa2 f2 f1-l">Explore some of the world's reefs</h2>

      <div class="w-100">
        <div class="flex flex-column justify-center items-center bb bt b--white">
          <SpinnyGlobe @update:bcu="selectedBCUID = $event" />
        </div>
      </div>

      <div class="cf w-100 w-80-l pt3">
        <div class="w-100 w-20-l fl-l pa1 pa4-l">
          <h2 class="pa0 ma0">Metadata</h2>
          <h2 class="yellow">{{ selectedBCUID }}</h2>
          <ul class="list pa0 f6">
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
          </ul>
        </div>

        <div class="w-100 w-80-l fl-l overflow-x-auto pa1 ph5-l">
          <h3>Coral reefs around the world</h3>
          <table class="h2 w-100 f7 overflow-x-auto collapse bg-white near-black  overflow-y-auto">
            <thead>
              <tr class="tl bg-black white">
                <th class="pa2">Name</th>
                <th class="pa2">Description</th>
                <th class="pa2">Refugia Type</th>
              </tr>
            </thead>
            <tbody>
              <!-- just make 20 example reefs -->
              <tr v-for="reef in reefs" class="stripe-dark">
                <td class="pa2">{{ reef.Location }}</td>
                <td class="pa2"> {{ reef.Description }}</td>
                <td class="pa2"> {{ reef['Refugia type'] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div id="citations" class="pa3 f6 tracked-tight">
      <h3 class="f3">Citations and credits</h3>
      <p><strong>Global temperature rise:</strong> Lee, J.-Y., J. Marotzke, G. Bala, L. Cao, S. Corti, J.P. Dunne, F.
        Engelbrecht, E. Fischer, J.C. Fyfe, C. Jones, A. Maycock,
        J. Mutemi, O. Ndiaye, S. Panickal, and T. Zhou, 2021: Future Global Climate: Scenario-Based Projections and
        NearTerm Information. In Climate Change 2021: The Physical Science Basis. Contribution of Working Group I to the
        Sixth Assessment Report of the Intergovernmental Panel on Climate Change [Masson-Delmotte, V., P. Zhai, A.
        Pirani, S.L. Connors, C. Péan, S. Berger, N. Caud, Y. Chen, L. Goldfarb, M.I. Gomis, M. Huang, K. Leitzell, E.
        Lonnoy,
        J.B.R. Matthews, T.K. Maycock, T. Waterfield, O. Yelekçi, R. Yu, and B. Zhou (eds.)]. Cambridge University Press,
        Cambridge, United Kingdom and New York, NY, USA, pp. 553–672, doi:10.1017/9781009157896.006. </p>

      <p><strong>Photography from:</strong> </p>


    </div>

    <div id="credits" ref="credits" class="o-90 vh-50" style="margin-top: 80vh;">
      <h3 class="tc o-70">
        A project from
      </h3>

      <!-- /logos/WCS_SEAL_ACRONYM-White stroke.png -->
      <div class="tc flex-l flex-row justify-center items-center">
        <img :src="`/logos/WCS_SEAL_ACRONYM-White%20stroke.png`" alt="WCS logo" class="h4" />

        <img :src="`/logos/BP_Ocean_Initiative_logo_Stacked_White.png`" alt="NOAA logo" class="h4" />
        <a href="https://room302.studio" class="dim ml2">
          <img :src="`/logos/room302_logo_whiteonalpha.png`" class="h4" />
        </a>

      </div>

    </div>
  </div>
</template>
<script setup>
import * as d3 from 'd3'
const selectedBCUID = ref(null);

useSeoMeta({
  title: 'Hope Blooms Underwater: The Coral Reefs Defying Climate Change',
  ogTitle: 'Hope Blooms Underwater: The Coral Reefs Defying Climate Change',
  description: 'Nestled beneath the ocean waves, some coral reefs are defying the odds, challenging standard climate predictions.',
  ogDescription: 'Nestled beneath the ocean waves, some coral reefs are defying the odds, challenging standard climate predictions.',
})

useHead({
  title: 'Hope Blooms Underwater: The Coral Reefs Defying Climate Change',
  meta: [
    { name: 'description', content: 'Nestled beneath the ocean waves, some coral reefs are defying the odds, challenging standard climate predictions.' },
    /* favicon */
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ]
})


/* load CSV from public/Table 1 from Conservation Biology2023.pdf - Sheet1.csv for table */
const reefs = ref([]);
const sections = [
  { title: 'Introduction', id: 'top', ref: 'introvisual' },
  { title: 'Global temperature rise', id: 'section-1', ref: 'globaltemp' },
  { title: 'Impact on world and oceans', id: 'section-2', ref: 'climateimpact' },
  { title: 'Ocean life thrives', id: 'section-3', ref: 'oceanlifethrives' },
  { title: 'Evolving understanding', id: 'section-4', ref: 'evolvingunderstanding' },
  { title: 'Three distinct reef types', id: 'section-5', ref: 'threedistinct' },
  { title: 'Avoid refugia', id: 'section-6', ref: 'avoidrefugia' },
  { title: 'Recover refugia', id: 'section-7', ref: 'recoverrefugia' },
  { title: 'Resist refugia', id: 'section-8', ref: 'resistrefugia' },
  { title: 'Reef type breakdown', id: 'section-9', ref: 'reefsbytype' },
  { title: 'What now?', id: 'section-10', ref: 'whatnow' },
  { title: 'Act for them now', id: 'section-11', ref: 'calltoaction' },
  { title: 'Explore', id: 'section-12', ref: 'explorethemall' },
  { title: 'Credits', id: 'credits', ref: 'credits' },
]

/* now we need to make all of the refs for the sections */
const oceanlifethrives = ref(null)
const climateimpact = ref(null)
const globaltemp = ref(null)
const evolvingunderstanding = ref(null)
const threedistinct = ref(null)
const avoidrefugia = ref(null)
const recoverrefugia = ref(null)
const resistrefugia = ref(null)
const reefsbytype = ref(null)
const whatnow = ref(null)
const calltoaction = ref(null)
const explorethemall = ref(null)
const credits = ref(null)

const isSectionVisible = ref([
  false, // intro
  false, // globaltemp
  false, // climateimpact
  false, // oceanlifethrives
  false, // evolvingunderstanding
  false, // threedistinct
  false, // avoidrefugia
  false, // recoverrefugia
  false, // resistrefugia
  false, // reefsbytype
  false, // whatnow
  false, // calltoaction
  false, // explorethemall
  false, // credits
])

for (let i = 0; i < sections.length; i++) {
  const section = sections[i];
  const sectionRef = ref(null);
  const sectionObserver = useIntersectionObserver(sectionRef, {}, ([{ isIntersecting }]) => {
    isSectionVisible.value[i] = isIntersecting;
  });

  // add the sectionRef to the section
  section.ref = sectionRef;
  section.observer = sectionObserver;
}

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
  overflow: hidden;
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
}

.cta-button {
  font-size: 1.7em;
  line-height: 1.4em;
  background-color: #5CF3E1;
  color: black;
  border: none;
}</style>