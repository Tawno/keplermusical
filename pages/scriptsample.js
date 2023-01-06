import Head from 'next/head'
import styles from './scriptsample.module.css'
import { Fragment } from 'react'
import { Courier_Prime } from '@next/font/google'
import Link from 'next/link'

const courier = Courier_Prime({
  weight:['400'],
  style:['normal'],
  subsets: ['latin'],
  variable: '--courier-font',
})
function ScriptSample() {
  return (
    <Fragment>
    <Head>
        <title>A Kepler Musical</title>
        <meta name="description" content="musical about kepler" />
        <link rel="icon" href="/favicon.ico" />
</Head>
 
 <div className={`${styles.scriptSheet} ${courier.variable}`}><h2>A SICKLY CHILD</h2><div><span>Vox 1:</span><p> DID YOU EVER SEE SUCH A SICKLY CHILD?<br/>
          HEAR SUCH A TALE OF A BOY’S MISFORTUNE?<br/>
          FRAIL, INFECTIOUS ALONE AND SHY<br/>
          PALE AND SKINNY WITH A FAULTY EYE<br/>
          RASHES, BOILS, WORMS AND FEVER<br/>
          CONSTIPATION, COLD SORES AND MANGE<br/>
</p></div><div>
<span>Vox 2:</span> <p>DID YOU EVER THINK THAT A BOY COULD THRIVE  <br/>
          IN THE GLOOM AND THE SQUALOR WHICH SURROUND HIM?<br/>
          NO COMFORT FOR HIS GROWING PAINS<br/>
          THE RESTLESS BLOOD IN HIS FATHER’S VEINS<br/>
          OFF TO THE WARS WHERE THE WIFE WOULD JOIN HIM<br/>
          WHEN, FROM THE SMALLPOX, HE ALMOST DIES</p>
</div><div>
<span>Vox 3:</span><p> DID YOU EVER HEAR ALL THE RUMOURS OF<br/>
          THE MOTHER? YES, THE WOMAN IN </p>
</div><div>
<span>3-part vocs:</span>     <p>           THE SECRET POTIONS DEALING<br/>
                                            WHOSE POWERS SHE BELIEVES IN  <br/>
                                            AS A MAGIC MEANS OF HEALING<br/>
                                            THIS PALE AND SICKLY CHILD</p>
                                            </div><div>
                                            <span>Heinrich(Father):</span>  <p> DUBIOUS NONSENSE!<br/>
                             BREWS AND THEIR CONTENTS!<br/>
                             FOLK WILL BEGIN ACCUSING YOU OF WITCHERY!</p> 
                             </div><div>
                             <span>Katherine(Mother):</span><p> YOU CARE NOUGHT FOR HIM!<br/>
                             OFF FIGHTING SOME WAR SOMEWHERE!<br/>
                             OR WHEN AT HOME ABUSING ME!</p>
                             </div><div>
                             <span>Vox 1:</span>  <p>HOW DO YOU THINK THAT A BOY COULD FARE<br/>
           ON SO LITTLE LOVE IN A CROWDED HOUSEHOLD?<br/>
           STRANGERS ALL YET CLOSE IN KIND<br/>
           AS MOTLEY A BUNCH AS YOU WILL FIND<br/>
           ILLNESS, TORMENT, FITS AND QUARRELS<br/>
           IT’S A WONDER     HOW HE SURVIVED</p>
           </div><div>
           <span>Vox 2:</span> <p> WHAT’S TO BECOME OF THE FRAGILE BOY?<br/>
           HOW WOULD HE COPE WITH A LIFE OF LABOUR?<br/>
           UNDER THE FRAILTY WE SUSPECT<br/>
           LIES A REMARKABLE INTELLECT <br/>
           MAYBE A PLACE AT THE SEMINARY<br/>
           FOR THE CLERGY, HE’S SURELY BOUND</p>
           </div> <div>
           <span>Vox 3:</span><p> DID YOU EVER SEE SUCH A FAMILY TREE?<br/>
          PROUD GENERATIONS UNDER </p>
</div><div>
<span>3-part vocs: </span>                        <p>     THEIR STAR SHINING<br/>
                                            WHOSE FORTUNES WERE DECLINING<br/>
                                            YET THESE ANCESTRAL LINES BRING<br/>
                                            SUCH A RARE AND GIFTED CHILD</p> 
                                            </div> <div>

                                            <span>Heinrich:</span><p>  SEE WHOM HE TAKES AFTER!</p>
      </div><div>
                                            <span>Katherine:</span> <p>  AND HIS-GOOD-FOR-NOTHING BROTHER?</p>
                                            </div><div>
                                            <span>Heinrich:</span> <p>  HE, TOO, COULD BE A SOLDIER JUST LIKE ME!</p>
                                            </div> <div>
                                            <span>Katherine:</span> <p> YOUR WORK BRINGS SHAME ON US!</p>
                                            </div><div>
                                            <span>Heinrich:</span><p>  YOU, YOU’RE SO UNGRATEFUL!</p>
                                            </div> <div>
                                            <span>Katherine: </span><p>  HOW CAN YOU SAY SUCH THINGS!?</p>
</div><div>
<span>Vox 1:</span><p> DID YOU EVER SEE SUCH A SICKLY CHILD?<br/>
          HEAR SUCH A TALE OF A BOY’S MISFORTUNE?<br/>
          FRAIL, INFECTIOUS ALONE AND SHY<br/>
          PALE AND SKINNY WITH A FAULTY EYE<br/>
          RASHES, BOILS, WORMS AND FEVER<br/>
          CONSTIPATION, COLD SORES AND MANGE</p>
</div><div>
<span>Vox 2: </span><p> WHAT’S TO BECOME OF THE FRAGILE BOY?<br/>
           HOW WOULD HE COPE WITH A LIFE OF LABOUR?<br/>
           UNDER THE FRAILTY WE SUSPECT<br/>
           LIES A REMARKABLE INTELLECT <br/>
           MAYBE A PLACE AT THE SEMINARY<br/>
           FOR THE CLERGY, HE’S SURELY BOUND</p>
           </div><div>
           <span>Vox 3:</span> <p>DID YOU EVER SEE SUCH A FAMILY TREE?<br/>
          PROUD GENERATIONS UNDER </p>
          </div><div>
          <span>3-part vocs:  </span>       <p>THEIR STAR SHINING<br/>
                                           WHOSE FORTUNES WERE DECLINING<br/>
                                           YET THESE ANCESTRAL LINES BRING<br/>
                                           SUCH A RARE AND GIFTED CHILD</p> 
                                           </div><div>
                                           <span>Vox 3: </span><p>PRAISE BE TO HEAVEN FOR THE GIFTED BOY<br/>
          A CARELESS HEAD FULL OF WORDS AND NUMBERS<br/>
          PRAYERS, PSALMS AND POETRY</p>
          </div><div>
          <span>Vox 2: </span><p>LIFE CAN BE HELL FOR A THOUGHTFUL CHILD<br/>
          WHICH OF HIS KIN WOULD DARE TO QUESTION<br/>
          FAITH AND PHILOSOPHY?</p>
          </div><div>
          <span>Vox 1:</span> <p>HOW SHALL WE DEAL WITH A RESTLESS MIND?<br/>
          ONE WHOSE FATE MAY BE DRIVEN BY THE MOON,<br/>
                                    MARS AND MERCURY<br/>
                                    PRAYERS, PSALMS AND POETRY</p>
                                    </div><div>
                                    <span>3-part vocs:   </span>     <p>                        FAITH AND PHILOSOPHY <br/>
                                            MATHS AND GEOMETRY<br/>
                                            HARMONY<br/>
                                            SYMMETRY</p>
                              </div>      
</div>
<div className={'readMoreCont'}>
            <Link href="/themusical" className={` readMore`}>
              Go back
            </Link>
          </div>
  </Fragment>
  )
}
export default ScriptSample