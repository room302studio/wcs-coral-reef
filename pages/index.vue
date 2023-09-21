<template>
  <div class="light-blue pa1 pa5-l" id="top">
    <TopographicVisual class="w-100 z-1" />
    <div id="top-bg-gradient" class="fixed top-0 left-0 w-100 vh-100 z-0"></div>

    <div id="intro-bg"></div>

    <div id="intro-visual" ref="introvisual" class="z-0">
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


    <div class="vh-50 w-100 w-90-ns pa4 mt3">
      <!-- <h3 class="w-100 f3 fw4 tc mv0 pv1 teal">Wave of Hope</h3> -->
      <h1 class="f2 f1-ns f-subheadline-l tl light-blue mv0 pa3 pt2 ph4-l">
        <span class="fw4">Hope Underwater:</span> <br />The Coral Reefs Defying Climate Change
      </h1>

      <div class="">
        <div class="measure-wide fw6 lh-title pv2 light-blue mv2 mb2-l ph2 ph4-l">
          <p class="f4">Nestled beneath the ocean waves, some coral reefs are defying the odds, challenging standard
            climate predictions.</p>
        </div>

        <div class="measure-wide fw6 lh-title pv2 light-blue mv2 mv2-l ph2 ph4-l">
          <p class="f4">
            These rare reefs have the ability to survive and fight back against the impacts of climate
            change – if we find them and protect them.
          </p>
        </div>
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

  <div id="intro-cta" ref="intro" class="mv0 z-1">
    <p class="measure-wide f5 f3-l fw7 teal tc center">
      Discover the new evidence showing some reefs are resisting, avoiding, and recovering from climate change.
    </p>
    <!-- down arrow -->
    <img :src="`/svg/down_arrow.svg`" alt="down arrow" class="h3 center db" />
  </div>

  <div id="surface-of-water"></div>

  <div class="section">
    <div class="o-70">
      <!-- beautiful coral reef photography -->
      <img :src="`/images/EmilyDarling.Fiji.2019_transparent.png`" alt="coral reef" class="mt4 pt4 br4 z-0" />
    </div>
  </div>

  <!-- The tachyons class to make flex items go to the bottom of the container is "flex flex-column justify-end items-center" -->
  <!-- <div ref="globaltemp" id="section-1"
    class="w-100 w-90-l pa1 pa5-l section v-mid flex-ns flex-row justify-center items-end">

  </div> -->

  <div id="section-2" ref="climateimpact" class="light-blue section cf w-100 w-90-l pa1 pa5-l">
    <!-- <div>
      <h2 class="f3 f-subheadline-l pv4 teal">The impact of climate change is clear...</h2>
    </div> -->
    <div class="w-100 mv4 pv4">
      <!-- <h2 class="ma0 pa0 fw1">Impact on the world</h2>
      <ul>
        <li>More frequent and intense heatwaves above and underwater</li>
        <li>Increased frequency of wildfires</li>
        <li>Changes in crop yields</li>
        <li>Increased intensity of tropical storms</li>
        <li>Spread of vector-borne diseases</li>
      </ul>
    </div> -->

      <!-- make a spacer div with 50% width -->
      <!-- <div class="w-100 w-50-ns fl-ns">&nbsp;</div> -->

      <div class="w-100 w-50-l flex-item">
        <h1 class="f2 f1-l">What Different Climate Scenarios Mean for Global Temperature</h1>

        <div>
          <img :src="`/svg/global_temp_rise_chart.svg`" />
        </div>
      </div>

      <div class="w-100 w-50-l flex-item pa2 pa5-l">
        <p>
          Since scientists first started monitoring global temperatures, a clear pattern of steady increase has emerged.
        </p>
        <p>
          Rising temperatures challenge life on earth as we know it, as well as life below our ocean’s surface – <a
            href="https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_Chapter04.pdf">Shared Socioeconomic
            Pathways, or SSPs,</a> are scenarios predicting possible future conditions on the planet based on warming
          trends, and the picture those models paint, if we aren’t able to curb CO2 emissions and cap warming, can be
          dire.
        </p>
      </div>

      <div class="w-100 fl-ns mv3 pv4">
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

        <!-- a grid of a few nice images of coral reefs -->
        <div class="w-100 flex flex-wrap justify-center items-center pr2 pr4-l">
          <div class="w-100 w-50-ns pa1 pa2-l">
            <img :src="`/gallery-picks/AlecHughes.SolomonIslands.FishDrive.2022.75.JPG`" alt="coral reef" class="br4" />
          </div>
          <div class="w-100 w-50-ns pa1 pa2-l">
            <img :src="`/gallery-picks/Emily Darling.Borneo.2018(5).jpg`" alt="coral reef" class="br4" />
          </div>
          <div class="w-100 w-50-ns pa1 pa2-l">
            <img :src="`/gallery-picks/EmilyDarling.Siquijor Island. Philippines.2023.49.jpg`" alt="coral reef"
              class="br4" />
          </div>
          <div class="w-100 w-50-ns pa1 pa2-l">
            <img :src="`/gallery-picks/OceanImageBank_JordanRobins_01.jpg`" alt="coral reef" class="br4" />
          </div>
        </div>
      </div>

      <div class="w-100 w-50-ns fl-ns">
        <p>However, amidst all the bad news, <a href="https://conbio.onlinelibrary.wiley.com/doi/full/10.1111/cobi.14108"
            target="_blank">a new study finds</a> a remarkable show of coral resilience.</p>
        <p>Coral reefs, despite the increasingly challenging conditions, are scripting their own tales of survival.</p>
        <p>Reefs, found in <a
            href="https://www.fisheries.noaa.gov/national/habitat-conservation/shallow-coral-reef-habitat#:~:text=Reefs%20occur%20in%20less%20than,%2C%20sea%20turtles%2C%20and%20more.">less
            than 1 percent of the ocean</a>, are incredibly important as they house nearly one-quarter of all marine
          species.</p>

        <p>
          Coral reefs are the perfect spot for ocean life to find food, shelter, and raise the next generation. They
          underpin the productivity of our fisheries, sustaining millions of people with protein-rich food every day, and
          also serve as buffers absorbing wave energy and protecting our coastlines from storms and erosion.
        </p>

        <p>
          Economically too, they're worth billions, driving tourism in many countries.
        </p>

        <p>With ocean temperatures rising, reefs have been under threat and in the news as waves of bleaching events hit
          these biodiversity hotspots. But, we now know, temperature isn’t the only factor in whether or not reefs
          survive.</p>

      </div>
    </div>

    <div id="section-4" ref="evolvingunderstanding"
      class="section w-100 cf flex-ns flex-row justify-center items-center w-100 w-90-l pa1 pa5-l">
      <div class="w-100 w-two-thirds-ns bg-transparent-white pa3">
        <h1 class="pr1 pr4-l f2 fw2 tc">Our understanding is evolving</h1>
        <img :src="`/svg/environmental_conditions.r2.svg`" alt="reef evolution" class="w-100" />
      </div>

      <div class="w-100 w-third-ns fl-ns pa4 f4 measure">
        <p>Previous scientific models used to predict how coral reefs might survive climate change were only based on a
          single environmental condition – excess temperature. Newer models are much more complex, and incorporate over 25
          variables of temperature, depth, and human pressures of pollution, overfishing and management
        </p>

        <p>This high-definition understanding gives us a much better view of what is
          happening to reefs around the world, and what we can do to help.
        </p>
      </div>
    </div>

    <div id="section-5" ref="threedistinct" class="pa1 pa5-l">
      <div class="pa3 pa5-l lh-copy f2 measure">
        <p>We’ve identified that there are not just one, <strong>but at least three</strong> distinct types of coral reefs
          that are
          defying the odds of climate change, and they are each showing signs of resilience in a variety of remarkable
          ways.
        </p>
      </div>
    </div>

    <ReefTypeModule id="section-6" ref="avoidrefugia" class="w-100 w-80-ns pa4" :title="'Avoidance'"
      :headline="`Rare Ocean 'Cool Spots'`" :headline-image="`/images/avoid_OceanImageBank_MattCurnock_02.jpeg`"
      :casestudy-image="`/images/avoid_casestudy_MichaelMarkovina.Tanzania.Pemba.2019%20(3).jpg`"
      :copy="`In the ocean's vast expanse, certain reefs known as ‘Avoidance Refugia’ have been able to avoid the impacts of hot water thanks to being located in rare underwater ‘cool spots’. These reefs are often associated with deep cool water close to shore, and are natural sanctuaries from the warming trends of climate change, places where corals still thrive and massive, healthy reefs shelter huge troves of marine biodiversity.`"
      :locations="[
        {
          name: 'Kisite Marine Park in Kenya',
          // -4.713696429415297, 39.3622329267236
          lat: '-4.713696429415297',
          lng: '39.3622329267236',
          copy: 'Kisite Marine Park is located near a deep underwater channel on the border of Kenya and Tanzania. The channel’s unique depth and cool currents have helped nearby coral reefs escape the impacts of hot water events, a pattern of avoidance that has been demonstrated across 30 years of WCS monitoring.'
        },
        //   {
        //   name: 'South Africa',
        //   lat: '-34.397',
        //   lng: '150.644',
        // },
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


    <ReefTypeModule id="section-7" ref="recoverrefugia" class="w-100 w-80-ns pa4" :title="'Recovery'"
      :headline-image="`/images/recover_OceanImageBank_MattCurnock_24.jpeg`"
      :casestudy-image="`/images/recover_casestudy_TomVierus.VatuiRa.Fiji.2020.94.jpg`" :headline="`The Oceanic Phoenix`"
      :copy="`The 'Recovery Refugia' embody our planet’s incredible capacity to heal and recover. Researchers are finding reefs all over the world that have bleached during warm water events, or been leveled by climate change induced mega storms, only to shock scientists by their rapid recovery - growing back in record time where there was once only rubble. These reefs are often found in locations where fast currents promote rapid coral growth.`"
      :locations="[
        //   {
        //   name: 'Maldives',
        //   lat: '-34.397',
        //   lng: '150.644',
        // },
        {
          name: 'Vatu-i-Ra in Fiji',
          // -17.31537905313272, 178.4666749294758
          lat: '-17.31537905313272',
          lng: '178.4666749294758',
          copy: 'Vatu-i-Ra is located on Fiji’s Suncoast between the two main islands of Viti Levu and Vanua Levu. The Conservation Area has 100+ km2 of coral reefs and over 100 species of fish, and has shown an ability to rapidly recovery after being severely damaged by storms.'
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
          lat: '-20.540289409615923',
          lng: '57.35869206436161',
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

    <ReefTypeModule id="section-8" ref="resistrefugia" class="w-100 w-80-ns pa4" :title="'Resistance'"
      :headline="'The Adapters'" :headline-image="`/images/resist_OceanImageBank_ShaunWolfe_26.jpeg`"
      :casestudy-image="`/images/resist_casestudy_WCS__Tom Vierus.Western Province.Solomon Islands.2023.83.jpg`"
      :copy="`Adaptation is nature's survival strategy. ‘Resistance Refugia’ reefs all over the world aren’t just avoiding heat, but are actively resisting it. Evolved adaptations are allowing those corals to take hot water events in stride and defy bleaching and other impacts – a show of resilience in the face of rapid change. These reefs are often found in locations with mild to moderate chronic stresses.`"
      :locations="[
        {
          name: 'Kolombangara Island in Solomon Islands',
          // -7.9817752095027, 157.06518171888
          lat: '-7.9817752095027',
          lng: '157.06518171888',
          copy: 'Part of the Coral Triangle, Solomon Islands has some of the world’s highest diversity of coral species. WCS completed the first ever island-wide coral reef survey in Kolombangara in 2016, where teams found low levels of bleaching despite heat events.'
        },
        {
          name: 'Northwest Mauritius',
          lat: '-20.173',
          lng: '57.560'
        },
        // {
        //   name: 'Bay of Cartagena',
        //   lat: '12.879',
        //   lng: '121.774'
        // },
        {
          name: 'Gulf of Mannar',
          lat: '-24.397',
          lng: '150.644'
        },
      ]" />

    <div id="section-9" ref="reefsbytype" class="section w-100 w-80-l cf z-2 pa1 pa4-l">
      <h2 class="f1 teal mv0 pv2">Discovering resilient reefs</h2>
      <div>
        <p class="measure pv2">
          Coral reefs have truly astonishing adaptive capabilities, falling mainly into three categories: Avoidance,
          Recovery, and Resistance. These reefs either evade harsh conditions, endure them steadfastly, or rejuvenate
          after damage.
        </p>

        <p class="measure pv2"> This multifaceted way of understanding brings with it profound implications for
          conservation efforts, enabling
          us to tailor our strategies to the unique needs and resilience patterns of each reef type. </p>

        <p class="measure pv2">
          Despite our expanding knowledge, a significant number of these rare coral reef refuges currently remain <strong
            class="white">unknown.</strong>
          Satellite data tells us a lot about coral reefs and our oceans, but signs of resilience in coral refuges can be
          subtle and need to be verified in the water by researchers.
        </p>
        <p class="measure pv2">
          Scientists think, right now, that more than 50% of these coral reefs are still waiting to be found and
          protected all over the world.
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
          Contrary to the popular doom prognosis for coral reefs, this new science shines a path toward a better future
          for our oceans. Each of these three types of coral reef refuges have the ability to survive and fight back
          against the impacts of climate change – <em>if</em> we find them and protect them. And the clock is ticking.
        </p>
        <p class="measure pv3">
          Countries worldwide are waking up to the crisis facing our oceans. The "30x30" pledge, a goal to protect 30% of
          the earth's lands and oceans by 2030, was one significant step taken during last year's global biodiversity
          summit.
        </p>
        <p class="measure pv3">
          Now, we need every coral reef country in the world to put these coral climate refuges at the center of their
          plans for ocean protections and 30x30.
        </p>
        <p class="measure pv3">
          By working with governments and local community partners to find and conserve a globally connected network of
          these climate-resistant reefs, we can give them a fighting chance against climate change.
        </p>

      </div>
    </div>



    <div id="section-11" ref="calltoaction" class="section w-100 w-80-ns pa1 pa3-l">
      <div class="pa1 pa5-l">
        <!-- <h2 class="f2 f1-l mv0 pv0">Our oceans are counting on us. Act for them now.</h2>
        <div class="measure-wide white f2 pv5">
          All of this comes down to one simple message: Despite what you’ve heard, if we act soon we can still save our
          reefs. Now that you understand how important each of these rare climate refuge reefs are, you can use your voice
          for good.
        </div> -->

        <div class="w-100 cf tc">
          <div class="w-100 dib pa1 pa2-l v-bottom">
            <div class="bg-transparent-black white br4 pa2 tl">
              <div class="pa2 pa3-l fw5 f4 f3-l lh-copy">
                Tell your government representatives loud and clear: <strong style="color: #5CF3E1;">coral reefs are
                  critical to biodiversity conservation
                  and climate adaptation</strong>. Sign on, and WCS will hand-deliver your signatures to international
                leaders and
                lawmakers at the UN Climate Change Conference and the Convention on Biological Diversity.
              </div>
              <img src="/svg/down_arrow.svg" alt="down arrow" class="h3 center db" />
              <!-- <a href="mailto:example@example.com?subject=Hello%20World&body=Hello,%20world!" class="cta-button dim pointer w-100 pa2 mv4">Join Us</a> -->
              <!-- Sign on #1 should go to: marineprogram@wcs.org
Subject line: Hope underwater: A message in support of coral reefs to government leaders
Message: DRAFT “Coral reefs are critical to biodiversity conservation and climate adaptation. We need our governments and leaders to make bold commitments to safeguard ocean biodiversity, especially as part of updated national plans to conserve coral reefs. Coral reefs need to be front and center in national climate mitigation and adaptation strategies.”
Space for them to sign their name, and country. -->
              <a href="mailto:marineprogram@wcs.org?subject=Hope%20underwater:%20A%20message%20in%20support%20of%20coral%20reefs%20to%20government%20leaders&body=Coral%20reefs%20are%20critical%20to%20biodiversity%20conservation%20and%20climate%20adaptation.%20We%20need%20our%20governments%20and%20leaders%20to%20make%20bold%20commitments%20to%20safeguard%20ocean%20biodiversity,%20especially%20as%20part%20of%20updated%20national%20plans%20to%20conserve%20coral%20reefs.%20Coral%20reefs%20need%20to%20be%20front%20and%20center%20in%20national%20climate%20mitigation%20and%20adaptation%20strategies.%0A%0A%0AName:%0ACountry:"
                class="db tc white link cta-button dim pointer w-100 pa2 mv4">Sign On</a>
            </div>
          </div>

          <div class="w-100 dib pa1 pa2-l v-bottom">
            <div class="bg-transparent-black white br4 pa2 tl">
              <div class="pa2 pa3-l fw5 f4 f3-l lh-copy">
                Scientists have only discovered about half of the coral reef refuges hidden underwater all over the world.
                We need to change that, and soon. Consider <strong style="color: #5CF3E1;">expanding your funding or
                  extending a hand in partnership to
                  help support the discovery of these climate-resilient coral reefs.</strong> Reach out to explore other
                ways to
                advance this work with us.
              </div>
              <img src="/svg/down_arrow.svg" alt="down arrow" class="h3 center db" />
              <!-- <button class="db tc white link cta-button dim pointer w-100 pa2 mv4">Join us</button> -->
              <a href="mailto:marineprogram@wcs.org?subject=Hope%20underwater:%20Partnership%20for%20coral%20reefs&body="
                class="db tc white link cta-button dim pointer w-100 pa2 mv4">Join Us</a>
            </div>
          </div>

          <div class="w-100 dib pa1 pa2-l v-bottom">
            <div class="bg-transparent-black white br4 pa2 tl">
              <div class="pa2 pa3-l fw5 f4 f3-l lh-copy">
                Finding and protecting all of our coral reef refuges is a group effort. <strong style="color: #5CF3E1;">To
                  dive deeper into the data and to contribute your own data, meet MERMAID.</strong> Join our collaborative
                global movement.
              </div>
              <img src="/svg/down_arrow.svg" alt="down arrow" class="h3 center db" />
              <a href="https://www.datamermaid.org" class="db tc white link cta-button dim pointer w-100 pa2 mv4"
                target="_blank">Join
                Us</a>
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
      <h2 class="mv0 pa2 f2 f1-l">Explore some of the world's climate resilient reefs</h2>

      <div class="w-100">
        <div class="flex flex-column justify-center items-center bb bt b--white">
          <SpinnyGlobe @update:bcu="selectedBCUID = $event" />
        </div>
      </div>

      <div class="cf w-100 w-80-l pt3">
        <!-- <div class="w-100 w-20-l fl-l pa1 pa4-l">
          <h2 class="pa0 ma0">Metadata</h2>
          <h2 class="yellow">{{ selectedBCUID }}</h2>
          <ul class="list pa0 f6">
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
            <li><strong>Item:</strong> Value</li>
          </ul>
        </div> -->

        <div class="w-100  overflow-x-auto pa1 ph5-l">
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
      <p><strong><a href="https://conbio.onlinelibrary.wiley.com/doi/full/10.1111/cobi.14108">Diversification of refugia
            types needed to secure the future of coral reefs subject to climate change:</a></strong> McClanahan, T. R.,
        Darling, E. S., Beger, M., Fox, H. E., Grantham, H. S., Jupiter, S. D., Logan, C. A., Mcleod, E., McManus, L. C.,
        Oddenyo, R. M., Surya, G. S., Wenger, A. S., Zinke, J., & Maina, J. M., 2023: Diversification of refugia types
        needed to secure the future of coral reefs subject to climate change. In <em>Conservation Biology</em>. Wiley
        Online Library, doi:10.1111/cobi.14108.</p>
      <p><strong>Global temperature rise:</strong> Lee, J.-Y., J. Marotzke, G. Bala, L. Cao, S. Corti, J.P. Dunne, F.
        Engelbrecht, E. Fischer, J.C. Fyfe, C. Jones, A. Maycock,
        J. Mutemi, O. Ndiaye, S. Panickal, and T. Zhou, 2021: Future Global Climate: Scenario-Based Projections and
        NearTerm Information. In Climate Change 2021: The Physical Science Basis. Contribution of Working Group I to the
        Sixth Assessment Report of the Intergovernmental Panel on Climate Change [Masson-Delmotte, V., P. Zhai, A.
        Pirani, S.L. Connors, C. Péan, S. Berger, N. Caud, Y. Chen, L. Goldfarb, M.I. Gomis, M. Huang, K. Leitzell, E.
        Lonnoy,
        J.B.R. Matthews, T.K. Maycock, T. Waterfield, O. Yelekçi, R. Yu, and B. Zhou (eds.)]. Cambridge University Press,
        Cambridge, United Kingdom and New York, NY, USA, pp. 553–672, doi:10.1017/9781009157896.006. </p>
      <p>T.R. McClanahan, M.K. Azali, Environmental variability and threshold model’s predictions for coral reefs,
        Frontiers in Marine Science 8(1774) (2021).
      </p>
      <p>T.R. McClanahan, M.K. Azali, N.A. Muthiga, S.N. Porter, M.H. Schleyer, M.M. Guillaume, Predicting coral community
        responses to climate change Climate PLoS in press (2023).</p>

      <p><strong>Photography from:</strong> The Wildlife Conservation Society, The Ocean Image Bank</p>


    </div>

    <div id="credits" ref="credits" class="o-90 vh-50" style="margin-top: 80vh;">
      <h3 class="tc o-70">
        A project from
      </h3>

      <!-- /logos/WCS_SEAL_ACRONYM-White stroke.png -->
      <div class="tc flex-l flex-row justify-center items-center">
        <a href="https://www.wcs.org/our-work/species/coral" class="dim">
          <img :src="`/logos/WCS_SEAL_ACRONYM-White%20stroke.png`" alt="WCS logo" class="h4" />
        </a>

        <a href="https://www.bloomberg.org/environment/protecting-the-oceans/bloomberg-ocean/" class="dim">
          <img :src="`/logos/BP_Ocean_Initiative_logo_Stacked_White.png`" alt="NOAA logo" class="h4" />
        </a>
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
  title: 'Hope Underwater: The Coral Reefs Defying Climate Change',
  ogTitle: 'Hope Underwater: The Coral Reefs Defying Climate Change',
  description: 'Nestled beneath the ocean waves, some coral reefs are defying the odds, challenging standard climate predictions.',
  ogDescription: 'Nestled beneath the ocean waves, some coral reefs are defying the odds, challenging standard climate predictions.',
  ogImage: '/og_image.png'
})

useHead({
  title: 'Hope Underwater: The Coral Reefs Defying Climate Change',
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
  // { title: 'Global temperature rise', id: 'section-1', ref: 'globaltemp' },
  { title: 'Impact on world and oceans', id: 'section-2', ref: 'climateimpact' },
  { title: 'Where ocean life thrives', id: 'section-3', ref: 'oceanlifethrives' },
  { title: 'Evolving understanding', id: 'section-4', ref: 'evolvingunderstanding' },
  { title: 'Three distinct reef types', id: 'section-5', ref: 'threedistinct' },
  { title: 'Avoidance refugia', id: 'section-6', ref: 'avoidrefugia' },
  { title: 'Recovery refugia', id: 'section-7', ref: 'recoverrefugia' },
  { title: 'Resistance refugia', id: 'section-8', ref: 'resistrefugia' },
  { title: 'Reef type breakdown', id: 'section-9', ref: 'reefsbytype' },
  { title: 'What now?', id: 'section-10', ref: 'whatnow' },
  { title: 'Act to protect now', id: 'section-11', ref: 'calltoaction' },
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

#intro-cta {
  /* border: 1px solid red; */
  /* margin-top: 22vh; */
  position: absolute;
  bottom: 0;
  width: 100%;

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
}
</style>