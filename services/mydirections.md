# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?departure_time=now&origin=toronto&destination=place_id%3AChIJ4Z4K5zzM1IkRNee9lNZuqr0&region=ca&mode=driving&avoid=tolls&waypoints=optimize%3Atrue%7Cplace_id%3AChIJq6p6ZumM1YkRwlenRs5y5SY%7Cplace_id%3AChIJzaca4FvU1IkRSoPOKL-0ka0&waypoint_order%3A0%7C2%7C1%7C3&units=metric&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJpTvG15DL1IkRd8S0KlBVNTI",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJzaca4FvU1IkRSoPOKL-0ka0",
         "types" : [ "establishment", "movie_theater", "point_of_interest" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJq6p6ZumM1YkRwlenRs5y5SY",
         "types" : [ "establishment", "point_of_interest", "university" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ4Z4K5zzM1IkRNee9lNZuqr0",
         "types" : [ "premise" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 44.3468763,
               "lng" : -78.5991131
            },
            "southwest" : {
               "lat" : 43.6533961,
               "lng" : -79.41952049999999
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "27.2 km",
                  "value" : 27202
               },
               "duration" : {
                  "text" : "34 mins",
                  "value" : 2055
               },
               "end_address" : "179 Enterprise Blvd #169, Markham, ON L6G 0E7, Canada",
               "end_location" : {
                  "lat" : 43.8488525,
                  "lng" : -79.32299279999999
               },
               "start_address" : "Toronto, ON, Canada",
               "start_location" : {
                  "lat" : 43.6533961,
                  "lng" : -79.3827986
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 270
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 52
                     },
                     "end_location" : {
                        "lat" : 43.6557259,
                        "lng" : -79.38373369999999
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003eBay St.\u003c/b\u003e toward \u003cb\u003eHagerman St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "w`miGnmocNa@LUFWF]JmA^KBcAXQDUFc@JOFYNk@RSFOB"
                     },
                     "start_location" : {
                        "lat" : 43.6533961,
                        "lng" : -79.3827986
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.5 km",
                        "value" : 2494
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 565
                     },
                     "end_location" : {
                        "lat" : 43.6618515,
                        "lng" : -79.3545244
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDundas St W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "iomiGhsocNIo@c@oDGc@AESaB[_CGi@E_@EWAGIo@?EAE?EAC?CAA?E?A?G?C@G?GBKNiAFc@PkADU@I@E@I?C?C?C?A?C?E?EACAI?EEWKy@WqBYuBWwBg@qDs@wEMgAK_AIw@CQ?EAC?ACICEAECEEEAAIEGEMGKGECECEEGEGIEECCCCAAIKKQIOIOISEQGSCKAGCI?IAEAICSAI?KAI?M?A?M?Q?G?G@I@Q?I@G?EAE?G?EACAKa@{Ca@oCc@cDEWAGYqBYwB]cCCSYuBQsAMeA_@qCa@wCCS]}B[_CAIWgBe@gDU_BMcAGc@Ge@EYO_AWiB]aCQcAMy@[sB?CSoACQAIEi@MoBMiBAUIwA"
                     },
                     "start_location" : {
                        "lat" : 43.6557259,
                        "lng" : -79.38373369999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 434
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 43.6655762,
                        "lng" : -79.3560615
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto the ramp to \u003cb\u003eDon Valley Pkwy. North\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "quniGv|icN]NUHsB~@aAd@KDOFE@IDODG@KB]JE@MBkCh@eARkCh@A@IBSP"
                     },
                     "start_location" : {
                        "lat" : 43.6618515,
                        "lng" : -79.3545244
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "12.7 km",
                        "value" : 12705
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 544
                     },
                     "end_location" : {
                        "lat" : 43.76305989999999,
                        "lng" : -79.33667539999999
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eDon Valley Pkwy N\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "{loiGjfjcN{AZeARK@q@N[FiB^yAXuAV{@P]FODQDC?MBQD[HUFYHSHWHIDWJKD]P[P_@T[RMHUPg@`@m@h@YTA@A@YXa@\\]ZkAdA}BtBC@mA`Ac@Zq@b@]RcAh@}Ar@eA\\ODQDeAX_APqAX_BXG@a@HYFA?a@Fa@Fe@FeANcAJeAH{@Do@DeAFgCLq@DG?O@cAFs@BG?A?[@c@?_@AYASAYCKAOA_@G{@USGWIg@QMEYM[MUKYKMEq@We@SKEC?u@Ys@WE?y@Wc@KAAo@KYGo@E_AGQAkBGm@As@AS?]Ak@Em@EWCC?UEC?SCSEWEIAA?]IE?SEYIQEEA[IUGe@O_@M]Mo@Yg@SCCo@[[QQKIEOK[SMI[UA?u@m@i@c@[YYWYYQQIK]_@]a@OQGGgAuA[_@kBaCqA_B]c@m@s@IM[_@SWGGUYy@cAi@q@c@g@KOMOqA{A]c@W]W_@MQe@s@IMMUCGIOGOIOQg@KYIQQm@GUAGAACKOo@Ii@GY?CAC?AGe@ACGm@Gm@?CAC?ACg@?GCe@A]?UA]?q@@y@DeABg@?GBi@@E?AHkA@MDw@@O?EJuAB_@B[F}@N_C@OJ}ABs@?S?A@Q@s@@mA?A?E?_@?YA]Ck@C_@?ECYEi@?AKo@CUKo@AECQI_@Ia@I]Qk@Mc@q@}A?AYm@MUGKIQAAYe@_@i@AAg@s@[c@a@m@AAQWW_@_@g@Yc@Ye@O[EIQY_@s@q@gBc@uAQg@Ke@Oi@W}@Qs@EMIYKa@a@sASi@Uo@Ug@ACa@u@KSMSW_@SWw@_AOOYWSOYQWOUOOI_@OQIm@Sa@K[Ik@KGAA?]GuDe@w@Is@KeAOgAMk@KYEe@Ko@Ss@W}@e@c@Ys@k@a@a@gAqAgA_BSYeBkCo@_A[g@IMwAuBMSKOIKi@{@KMOSQWW]GIMOKMa@c@YWA?WUWSKGIGOIIGOIIEEC]MYMUIMCEA]K[G[GUCGAWCOAC?[AY?E?U@C?Q@]@SBK@SBUDOBMDWFODIBSHWJIBGB[POHSJSNMHQLA@KHYTUTKJUReAdAGDeBdBIHa@`@e@`@OL]ZGDC@s@j@KFEBOLOJUNGDGDA@KFKF_@Vs@b@]PyAn@gBv@_@LYJUHKBc@NWFMD[HMD[Ho@NMBg@JSDMBO@YDWDoAJa@Dg@DC?y@DuAFiADQ?W?E@e@?m@@u@?cBBY?yABg@?cABmAB}ADU?[@I?A?W@Y@w@DS@{@DQ@K@G?}ANe@DG@uANu@F_D^aAJgANm@JmC\\}ARg@Hg@H_@Da@Fq@H}@LmARwAP_DZO@}AHcADs@BU?eA?UA{AC_@?Y?gAAg@?_@?e@Ae@?Y?i@?OBS?Y?A?]@S?]?]@oAF[@_AHSB}C^yAPQBkFv@sBZq@J[Da@Fu@Hs@HWDK?q@HkAF_DLc@@y@D{ADO@c@@c@BC?c@@_@BM?U@c@BeAFA?_AFE@K?{@HWBI@Q@[D[BeANYBm@Hi@H[Fs@JSDeARYFk@LuAXSDyA^_Bd@y@TsA^wA^ODi@Lu@Nu@NUDg@D_@Fa@FA?y@LI@i@HQDgANYFk@HiBXi@HYDC?iBXu@LoBXq@JA@M@MBm@He@D_@@W@"
                     },
                     "start_location" : {
                        "lat" : 43.6655762,
                        "lng" : -79.3560615
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 557
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 43.7680215,
                        "lng" : -79.3373213
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eDon Valley Pkwy N\u003c/b\u003e, follow signs for \u003cb\u003eON-404\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNewmarket\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-401 W\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "cnbjGfmfcN]VEBWBeAHq@Dg@BUBE?g@@Y@g@@U?o@@W@{@@qBBi@@Y@e@BE?W@e@DU@E@WBSBA?QBQBg@F]FOB"
                     },
                     "start_location" : {
                        "lat" : 43.76305989999999,
                        "lng" : -79.33667539999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.5 km",
                        "value" : 4528
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 160
                     },
                     "end_location" : {
                        "lat" : 43.808202,
                        "lng" : -79.34626349999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eON-404 N\u003c/b\u003e",
                     "polyline" : {
                        "points" : "cmcjGfqfcNOBUDe@Jo@Pc@L}@Tq@Rc@Li@NwA`@}Bj@wAXy@N}AT_AN[?aBTq@JS@sAPq@JuBX]DyAPmBRw@HyBN_BL_@DyAL_CRC@mBRa@DYLiCX_@DW?yDd@qAPqAPyAPG@{@JkDb@G@mC^iBTcCZKBUBmAN_C\\OB}ARmBVmBVe@FkFp@_Gx@gBToDd@iJlAs@JaBTqDd@q@JiIfAeALc@FqBXI@uAPw@J}En@aJlAE@m@HK@G@E@gCZaTrC{@JyC`@]D"
                     },
                     "start_location" : {
                        "lat" : 43.7680215,
                        "lng" : -79.3373213
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 664
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 53
                     },
                     "end_location" : {
                        "lat" : 43.8139034,
                        "lng" : -79.348445
                     },
                     "html_instructions" : "Take exit \u003cb\u003e22\u003c/b\u003e for \u003cb\u003eSteeles Avenue\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWoodbine Avenue\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRegional Road 8\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "ghkjGbihcNYME?EAG?I?M@o@H_BZqA`@kBr@q@XA@sBx@G@sAb@mAh@SJOFQHKHQHa@Na@Le@Lq@PgB`@u@L"
                     },
                     "start_location" : {
                        "lat" : 43.808202,
                        "lng" : -79.34626349999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1294
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 137
                     },
                     "end_location" : {
                        "lat" : 43.8252452,
                        "lng" : -79.35155069999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eWoodbine Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 8\u003c/b\u003e",
                     "polyline" : {
                        "points" : "{kljGvvhcN_@L_ARu@PMBm@L{@PoAVa@HYDYFQBYD_@Hg@JwATOBo@JC@E@C??@QTYD}@NeAPC@QKAAA?[FcDj@kDj@C@QBA?A@?@A@GHEHWDc@Hs@LOGAAA?G@qDj@a@Dw@LWFiBZMBOBQB[Fe@H]J{B^]FkAR_@F"
                     },
                     "start_location" : {
                        "lat" : 43.8139034,
                        "lng" : -79.348445
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 879
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 81
                     },
                     "end_location" : {
                        "lat" : 43.8279598,
                        "lng" : -79.34134809999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eEsna Park Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yrnjGdjicNGi@AIE[QyAEYKm@G[ACGKEUOaAUuAIk@UyACICOEYEOOk@IYAEWw@KUISQ_@MWEMOc@Oe@EKKw@GWI_@AIG_@SyAIm@m@eEIo@i@wDIm@E{@ScBUyB"
                     },
                     "start_location" : {
                        "lat" : 43.8252452,
                        "lng" : -79.35155069999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1482
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 146
                     },
                     "end_location" : {
                        "lat" : 43.8376538,
                        "lng" : -79.329301
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eAlden Rd\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "wcojGljgcNIc@Y{@S]GIKGECIAWYi@q@]c@eBuBkAwAU]eCwDmAkBMSIKQWY_@MOe@m@SWoA_BcByBOO{@gAMOOQEEGI][]Y_@[y@q@SQWQs@k@IGECYUy@o@IGWS}@s@a@[oByAq@g@uAiAUQSWIKGMO]M_@Ke@Ie@Gc@AICMOkA_@mC"
                     },
                     "start_location" : {
                        "lat" : 43.8279598,
                        "lng" : -79.34134809999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 761
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 75
                     },
                     "end_location" : {
                        "lat" : 43.8398401,
                        "lng" : -79.3203437
                     },
                     "html_instructions" : "Continue onto \u003cb\u003e14th Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 71\u003c/b\u003e",
                     "polyline" : {
                        "points" : "i`qjGb_ecNEQEU]_CMy@QgAG[[{BMu@CU?YKw@UaBk@mDg@mDACAAKMSqAm@}DCIKq@Gc@SqAaAkG"
                     },
                     "start_location" : {
                        "lat" : 43.8376538,
                        "lng" : -79.329301
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 983
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 87
                     },
                     "end_location" : {
                        "lat" : 43.8482233,
                        "lng" : -79.3242147
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBirchmount Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_nqjGbgccNcBj@IB_@LeA\\a@NKD_EzAID_@La@NgBn@a@Na@La@NiAb@_Bh@u@TIBg@R}CjAqBn@e@RA?u@VIDA?[L[JMDsAb@OFu@XQHa@NOJ"
                     },
                     "start_location" : {
                        "lat" : 43.8398401,
                        "lng" : -79.3203437
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "85 m",
                        "value" : 85
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 43.848465,
                        "lng" : -79.32320919999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eAviva Way\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kbsjGh_dcNWaBMu@Io@"
                     },
                     "start_location" : {
                        "lat" : 43.8482233,
                        "lng" : -79.3242147
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "36 m",
                        "value" : 36
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 43.8487724,
                        "lng" : -79.32334449999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{csjG`yccN}@X"
                     },
                     "start_location" : {
                        "lat" : 43.848465,
                        "lng" : -79.32320919999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "30 m",
                        "value" : 30
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 62
                     },
                     "end_location" : {
                        "lat" : 43.8488525,
                        "lng" : -79.32299279999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yesjGzyccNGc@Ga@"
                     },
                     "start_location" : {
                        "lat" : 43.8487724,
                        "lng" : -79.32334449999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "102 km",
                  "value" : 102377
               },
               "duration" : {
                  "text" : "1 hour 25 mins",
                  "value" : 5077
               },
               "end_address" : "200 Albert St S, Lindsay, ON K9V 5E6, Canada",
               "end_location" : {
                  "lat" : 44.3410364,
                  "lng" : -78.7416585
               },
               "start_address" : "179 Enterprise Blvd #169, Markham, ON L6G 0E7, Canada",
               "start_location" : {
                  "lat" : 43.8488525,
                  "lng" : -79.32299279999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "30 m",
                        "value" : 30
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 43.8487724,
                        "lng" : -79.32334449999999
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ifsjGtwccNF`@Fb@"
                     },
                     "start_location" : {
                        "lat" : 43.8488525,
                        "lng" : -79.32299279999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "36 m",
                        "value" : 36
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 46
                     },
                     "end_location" : {
                        "lat" : 43.848465,
                        "lng" : -79.32320919999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eBirchmount Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yesjGzyccN|@Y"
                     },
                     "start_location" : {
                        "lat" : 43.8487724,
                        "lng" : -79.32334449999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "85 m",
                        "value" : 85
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 43
                     },
                     "end_location" : {
                        "lat" : 43.8482233,
                        "lng" : -79.3242147
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eBirchmount Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{csjG`yccNHn@Lt@V`B"
                     },
                     "start_location" : {
                        "lat" : 43.848465,
                        "lng" : -79.32320919999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 123
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 43.8492594,
                        "lng" : -79.3246862
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at the 1st cross street onto \u003cb\u003eBirchmount Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kbsjGh_dcNCB]RQHYP]R[CE@G@OFi@N"
                     },
                     "start_location" : {
                        "lat" : 43.8482233,
                        "lng" : -79.3242147
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 603
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 97
                     },
                     "end_location" : {
                        "lat" : 43.8485731,
                        "lng" : -79.3318319
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eEnterprise Blvd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{hsjGhbdcNSFFZHj@RpAL`ADf@@h@?h@?XC`@Gh@WpBIv@Ch@Ap@?b@@b@Dr@DZVpB@Bd@xCTtAZpBTvA"
                     },
                     "start_location" : {
                        "lat" : 43.8492594,
                        "lng" : -79.3246862
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 810
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 84
                     },
                     "end_location" : {
                        "lat" : 43.85571470000001,
                        "lng" : -79.33378829999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWarden Ave.\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 65\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qdsjG|necNa@LsBj@eAToDv@oCl@OBiAPwARgBV{C`@WD_Ft@eAPcC^"
                     },
                     "start_location" : {
                        "lat" : 43.8485731,
                        "lng" : -79.3318319
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.7 km",
                        "value" : 2700
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 325
                     },
                     "end_location" : {
                        "lat" : 43.8483552,
                        "lng" : -79.3656168
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHwy 7\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 7\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "eqtjGd{ecNWDHf@AJ@FNdARhAFZH^DX@DXtAH\\\\zARr@F\\BJFl@L\\h@rBTx@Ll@@BP|@@JDNNv@@H?DATF^ZxA@H@FNr@VvAJj@F^PbAPnAZtB\\`CDXR~APdA|AjL^nCR|AT`BHl@Jn@`@zC`@lCHd@\\fCFd@r@tFZ`CX~B~@dHf@nE\\nC\\hC^xCD`@Z`CBV@Bb@jDf@`DDX\\rBTxAb@bDNlAd@rEPtAPhAD^Jp@NdA"
                     },
                     "start_location" : {
                        "lat" : 43.85571470000001,
                        "lng" : -79.33378829999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "24.7 km",
                        "value" : 24716
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 827
                     },
                     "end_location" : {
                        "lat" : 44.06281,
                        "lng" : -79.41909009999999
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eON-404 N\u003c/b\u003e via the ramp to \u003cb\u003eNewmarket\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "gcsjGbblcN?n@@\\H`AJfAFp@Hn@@JXdDAlACd@?@E~@E^ETYfAKVYl@GNg@x@A@[X[\\A@o@Zi@TmAX[Hi@PoDr@I@gAVOD_B`@iATm@Le@JKBSJSVwHnAg@Ho@JiBZu@J_Dd@gC^s@JeDh@wCd@u@LeHfAoHjAqNvBkBZkBZs@JgANgBXA?iBXWDyCd@QBcC^YFyATi@Hs@JyHhAy@LkBVa@Fc@F{@L_ANa@FiBXWDUBgARgEp@sATcK~A_APcC^gBXgAP{@LqARiBXmBZsBZC?gAPa@HoS~CG?G@YFYDwGbAuNxBc@HcAPgDf@OBOBiAPODuAPsCb@mC`@qDj@sEr@mG`AmIpASDoHhAcAPaVpD_BVWB{Cb@eHjAoO`Cg@FiAP_@F[Fa@F{ATkBXC@mG~@G@qEr@[FcC^[FkCb@iEp@_BVuBXe@HwDf@aBVA?qEt@}AVm@JiARmDh@eDh@gEl@aBLyBPw@DO@S?S@wDDwB@]CyBGm@A[EuAGiN}@}AIo@Ey@IsBMuBM}BOk@CC?uAGeAE_BAcAAkB?eABsABwAHoAHYBcAJaBPSBiC^oCb@}@NcCb@sBZ_BZqB\\yATaBV_AJ{AZaAN}Cd@yB^gDd@OBkEl@qFd@WDmAJuDZA@kFXO@c@Bk@D_CHW@yCHk@@c@?c@@M@eABeBB_C?m@@c@?c@?{A?{BCuAAsACk@?U?uCEcC@UCa@?A?eAAC?_@?wEES?O?_CAs@Ac@AkBCgAAC?_@AyGIyDGc@?c@Ac@AkBCiBAE?wDEgHIiACiBBqA?mEJQ?kBHW@cAFcAF}Fb@QBe@DmBVuCb@yCd@eARwATeAP{@JyBZqDh@sDh@uATc@FeAPcANs@FmCVG@oAJw@Fk@DaBL_BJo@Dm@DcCNI@kBNiBLC?WBs@FqAJO@[Ba@BqCPqALsAJmCRaAHw@Hi@F[Dq@J]F]FaARYFy@T{@VQH{@Xk@TcAb@iAj@iAh@a@Tq@^kAz@EBiA|@k@d@CBk@f@g@h@OLo@n@g@h@YZONUXe@f@y@|@gBpBeAjAkAnAa@d@a@b@s@r@iAjA}@t@e@^aAv@y@l@UNq@b@u@b@A@m@Zq@\\s@ZaA`@SHgA`@QFsA`@e@Lc@J_AROBi@HQDcCXcCX_@DeBRkANsBZG@KBM@_AJgBVSB{ATkAPo@Hm@H]F_@DwBZmBXeBTc@FSDoEj@mC^c@Fu@LgALeANwEn@G@aAL[DK@gANeBTUBiANuBTQBQ@sAPy@HI@E@SBG?yC^kEd@YD{@HIBkBRc@DwAPQBgALmCXq@H{Dd@eDb@_Df@wCd@QBKBgCf@gFdAm@Li@LaATa@J[HiAXsCr@{@Rk@NkCn@ODu@PmD|@KB{A^kCp@kCn@oAZ}@TkDx@g@L_ATE@aBb@e@L_@Ja@JiB`@gCn@eAV{Bf@g@N{Bj@a@JE@]He@JSFa@J]Hg@JeAVa@HSFgB^OB}AZKB}AZo@J_@HqARYFoARaBTiAP_@FuBViFn@C@sC\\eBRk@HkEh@iBTG?iFn@iBTsC\\iD`@iDb@_Ed@sAPcAL"
                     },
                     "start_location" : {
                        "lat" : 43.8483552,
                        "lng" : -79.3656168
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 708
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 45
                     },
                     "end_location" : {
                        "lat" : 44.068806,
                        "lng" : -79.41824919999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e51\u003c/b\u003e for \u003cb\u003eDavis Drive\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRegional Rd 31\u003c/b\u003e toward \u003cb\u003eNewmarket\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "q_}kGhpvcN}@?cBR}Fl@m@Dc@B_@B_@@g@@M@S@M?S?M?OAOAOAKAQCMECAKESIWQMIOMQQOQW_@CCQ[UYOUIOIIIIIGIEKGKCEAA?MAI?G?E?G@G@KBUHm@P"
                     },
                     "start_location" : {
                        "lat" : 44.06281,
                        "lng" : -79.41909009999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "26.3 km",
                        "value" : 26323
                     },
                     "duration" : {
                        "text" : "22 mins",
                        "value" : 1315
                     },
                     "end_location" : {
                        "lat" : 44.1398003,
                        "lng" : -79.1037992
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDavis Dr\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 31\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Davis Dr\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ae~kG`kvcN_AiHQmACOIo@U_B]}BOkAAGCEGQoBeOiAkI@e@o@uFUmBCUQkBE[w@qFOeAQkAE_@i@oDg@wC]yBcAyGOaAa@iCqAyIy@aG]_CIk@i@qD[uBo@iEK[Mw@w@mFS}Aa@qCG_@E[a@oCuAmJeC{Pi@iDM{@EWOgAKo@a@mCw@cGSqAe@wCCQKs@Gg@[yBWgBo@yE]iCmAgJKq@?Ga@qC]oCiAmI{AaLGe@iAeIYqBKq@gAeIi@wDy@_GESgAaIoA{ICSCOg@mD[sBKq@q@aFuByNCQkDkVCMa@oC_@mCc@_Ds@cFWiBoAgJgA}HU}Aa@mCu@eFAGc@{CMaAOcAq@iFYkBu@kFo@qEg@mDUyAGa@Gg@Ig@SqA_@mCCMGe@Kk@Im@AESyAKm@qB}MM_AQiAACKy@SsAKs@_@kCIg@OaAGc@Ga@]iCCSEUs@cF_@iCScBSqAAMOgAOgAEUYsB_@mCE]CQOeAKu@Ii@AEIi@?EACQuAE[EYGi@AAo@cFAIAES_BG_@M_AAMIo@Ga@M}@?AG_@CUOiASyAUcBUiBKo@ScB}@{GS{A?EQgAKw@Kq@SqAWiBKo@AG?AO}@EWKu@ACIk@CUQiA_@gCAEk@}DEWEWGg@Mw@Im@UyAKu@UwAu@cFc@wCIo@oAkIa@oCyAcKu@kFQkAYqB_@oCaA}GwA}J_@qCc@uC_@gCu@mFw@mFs@cFCK_A}GKo@Io@Ga@M{@g@sDCKyB{O[yBOaA[eCKm@Io@U_BIo@U_Bi@{DIq@Im@AAi@}D?AIo@U_BIo@k@}DsA_Kk@}D_@oCGk@ACGi@YoBO_AMaAIo@_@oCWuBEYa@mCIo@QkAQmAQsAE[U_B]cCG_@c@}CAOSqACYACCUWiBm@mEg@sDWsBe@oDUaBKo@_@qCSaBKq@k@eEcAuHAMQiAIo@Im@AGIg@Gi@AEGa@AMAGIg@Io@QmAc@cD_@iC?Ai@eESyAESE[Iq@Io@Kw@OaAMcASyAS_BUeBACGk@Ko@Im@?AIo@Im@?AIo@ESGa@]gCAI}@uGIo@?A_@sCCUCSAGIi@a@_DEYUcBGa@AMKm@Mu@Gi@COIq@SwAQuAIo@EWAGCQE]COEYCUCSCQSiBIo@ACIk@Io@M{@WaB[_CKo@Io@U_B_@oCIo@U}AIo@CSE[Ko@Io@Io@Io@Ko@Io@Io@Io@Ko@i@_EKs@Gk@Ko@CQ]oCG[WsB_@mCOiAc@eDe@gDiAoIOgACWe@eDCYEU_@oCIo@EYCUYwBEWU_BIo@CUKo@UaBOgAOiACUg@mDCQE]a@qCAMGa@CMIo@u@oFE[cAqHEWEWCUKo@UcBCOIo@S_Bs@oFSuAAIGe@_@oCAIIo@{@uGAGg@wDa@uCq@_FAGAIe@iD}@yGCOu@kF?CGa@g@oDE[Io@EUOiACQQmAMcAQkAi@}DCSQkACSE[MaAQmACQo@}ECQQmACQo@{EKo@CSeA{HsA}Js@oFm@yEEUIo@EYCW]qCIm@Io@Gi@Ku@SyA?E]oCOcAC[Ko@Io@i@eEGg@i@cEE_@Kw@AGWqBU_BS_BU_BIo@Io@Ig@Is@G_@CSSwAYuBQkAACM}@QmA?CKo@AIQoAACIo@Gc@AGKs@Gc@AGKs@_@iC?CGe@Mu@?CGe@CIE[COIo@ACAKSmA?CG_@AKAC?CGa@AIa@iC?CIk@Ks@Ik@ACIo@Ii@AC_@kCACOeACUACKq@Ig@?Ca@sCWcBaCsPAGu@mFSwAa@sCACi@yD?CIc@AKOeAEYGe@AIG_@CO_@mCAGSwAk@}DM{@YoBMcAKo@AEGg@Mw@SwAIo@Ko@AEGi@U}AKo@?EKo@_@iC?EKo@U_BIg@Ku@Gi@G[U}AIo@CSKo@Io@G_@COE_@COG_@CO[}BKo@COGg@AGSuAAIAI_@eCCQe@kDESE[CSQiA?Ai@{DAAIm@UaBIm@AAM}@_@kC]aCIq@CME_@COG_@Ig@OgAIm@EYCWKm@?CIk@Ko@?CSuA?EKo@Io@?AUcBIg@Iq@CQSyAa@sCE]QoAWmBM{@Gc@MaAg@mD?CIi@QmAE[SuAM{@UcBWmBCOS}AM{@Ge@EYWmBYkBIi@E[E]Ie@Iu@COES?EKo@YsBEYGg@AG[}BMy@?GIg@Gi@CMGe@Mw@?CQsAAGU}ASyAKw@YkBOiAWgBE]OcAAEM}@?CIi@QqAQmAEYQmAg@gDEUEYGe@W}AWiBa@mC"
                     },
                     "start_location" : {
                        "lat" : 44.068806,
                        "lng" : -79.41824919999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "8.1 km",
                        "value" : 8118
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 349
                     },
                     "end_location" : {
                        "lat" : 44.2101141,
                        "lng" : -79.125647
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLake Ridge Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eDurham Regional Rd 23\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "w`llGv}xaNiA^_Bh@q@To@RqA`@w@V]LaA\\i@PA?_@Le@N_AZm@RSHA?eCx@A@mBl@eEtAeBl@a@Lc@Na@LOFs@TcA\\A?A@cBh@IBYHQFoA^qBl@_AZ_@JSHa@LODs@TE@]JOFQDa@Ly@V[Ja@LiAZMDOFQDOFQFc@LODIBGBODQFOFQDc@LMFA?qA`@a@Lc@Lo@RA?QDeAXA@aATkB^MBSDSDOBc@HeAR]HC@c@Hc@Ha@Fu@NODc@HiB^mCr@G@WHqA`@eBf@ODQFWFIDeAXa@LWFKDKB{Ad@C@]HYFI@IBWDI@YDQBQ@UBM@Y@I?S@C?K?]?E?c@AIAYAKAIAo@GAAa@GC?_@GSEe@Km@Ma@IAAeAUw@QAAKCgB]AAOCwA[c@ICAuBc@wBe@mB_@QEOCc@KoAYsCm@_Ds@mAWWCk@I]Cw@Cq@?W@u@Bo@Fg@HE@SDc@HSFIBa@L[JE@aBh@mCz@OFyC~@E@]La@LE@EB}Ad@cCx@EBC?WJ_Bf@u@TUFIBA@UF?@IBiBj@UHUHcBh@sAb@_@Lc@La@Nm@RmInCA?sBr@UHaAZC@oExAuAb@uBn@UH}FhBw@Vo@Rw@Vm@P{Ad@}FjBcAZUFKDeA\\WHuDjAUFqAb@UFKDePdFc@NgA\\yDlAwBp@c@La@LsAb@SFa@Lq@R_Bf@[Ja@Lc@LE@[Ja@La@LG@[Ja@La@LEB[Ja@Lc@LGBkA\\wAb@a@LeA\\a@La@LODQFa@Lc@La@LODs@Tc@NMDu@Ta@Ly@VKBa@LcAZgBj@}Ad@IBa@LcAZYJyFdBa@LcAZcCj@o@Hi@F"
                     },
                     "start_location" : {
                        "lat" : 44.1398003,
                        "lng" : -79.1037992
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "13.6 km",
                        "value" : 13553
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 624
                     },
                     "end_location" : {
                        "lat" : 44.245389,
                        "lng" : -78.9628551
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDurham Regional Rd 13\u003c/b\u003e (signs for \u003cb\u003eRegional Rd 13\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eDurham Rd\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "exylGhf}aNKo@AOG_@S_BM_AG_@COE_@COeA_ICOE_@COQoACOE_@COS_BKo@Ea@UeBIi@AEAGIo@Ga@?EAGGa@?EAGIg@AGIo@S_BGa@AEAG]oC_@oCIg@Gi@Ku@AGq@gFsBiOAK_@qCi@_ECM[aCKo@MaAE[YsBe@kDKo@QuA_@oCAIGe@AIG[m@sEIo@CMQqAc@aDAKYqBE]OaAIo@E]MaAKo@S_BKo@_@mCAOCOCOIo@Ko@AOg@oDCOi@_EG_@Io@CO[_CIo@Ko@AMGa@Io@Ko@Iq@CKEa@U_BAMQqAIo@Io@CMGa@AMGa@AMKo@Ea@Io@CO[_CIo@Io@U_BIo@Io@Io@Ko@Io@S_BIo@Ko@SaBIo@Io@_@oCIo@S_BKo@S_BIo@U_BIo@EYU}AKo@Ko@Io@Ko@Km@E[CSIo@Ko@S_BIo@Ko@Io@S_BKo@Io@Io@Io@U_BIo@w@_Gs@eFIo@i@_E_A_H]kCm@aEU_Bk@}DIc@m@wDAEsAiK_@eCcA}GgAuHMs@Ks@s@oFGg@Go@e@aEE]CQIo@U_BS_BU_BS_Bm@iEIc@m@kEGc@aBmLAKKo@Ks@Ik@Ks@U}AIk@Io@ACIk@Io@OkAO_AKm@UyAU_BIu@Gk@Go@AEGo@Go@Io@Kq@COQmAIo@G]OaAa@mCAKEUAMIo@Io@AKGc@SaBAKGc@UkBCQMaAu@}ECOAKk@wECMAKWoBQoAGa@YkBWiBOiAKo@[gCw@wFIm@?AiAoI]oCi@_EIm@?AIm@AAIo@]mCAAIo@CScBkMGc@AKACS{AS_BKo@QsAK{@EYEWCWEWIo@y@gGc@gDy@gGEWCWk@gEGQMeAEUEYcAuHEYCUEWOgAEWIo@EWS_BEWCWEWEWIo@_@oCEWIo@CSACEWCWEWEWIm@EYIo@gAuHYwBEWqAgJOeAEYCUCYMgAEWm@sFCUEYQ_BQgBg@yDs@qFCUYyBOeAMiAi@}DIq@Io@CMQqAIo@Io@CMQqAIq@}@_Ha@{CKo@E]AEMcAE[WkBQsAIo@UeBAGGe@]iCCQE]k@oEE[Iq@Iq@Io@Io@AAE]AQIo@?AOaB?AIo@Go@?A?AACOyAy@aHE]AQKw@AKe@mD?C?AIi@?CUaBCQCWAC?AQyA?EIk@?EGi@ACGk@E[CS[uCKw@?EIo@e@gEE]CQOmAASIo@E]CQIq@Go@E]CQQaBOkACSGo@CSE]UsBOmAAQIo@s@oGCSE]CQe@aEEe@Gg@Io@CQOmAOkAMeACKIo@Iq@Ea@CMIo@a@eDCYEWMiAEUCYc@eDk@{EIo@yAqLCUEYIo@S_B"
                     },
                     "start_location" : {
                        "lat" : 44.2101141,
                        "lng" : -79.125647
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 362
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 44.2485232,
                        "lng" : -78.9640929
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSimcoe St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 2\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ut`mGzl}`NiCt@a@Lc@LgBf@aBd@EBqEpA"
                     },
                     "start_location" : {
                        "lat" : 44.245389,
                        "lng" : -78.9628551
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "21.8 km",
                        "value" : 21823
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 972
                     },
                     "end_location" : {
                        "lat" : 44.3246358,
                        "lng" : -78.7395085
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLittle Britain Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 4\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ghamGpt}`NKo@Im@a@oCKo@U_BIo@Km@U_BKo@mB}MKo@Ko@[}BCOIo@_A_HKo@Io@u@oFIo@_@oCGg@Kw@Ko@s@oFKo@Io@Ik@mAqIKo@yBmOIo@Ko@CQOmAU_B}CoU_@oCu@oFS_BIg@AG_@mCk@_EaA_HU}Ak@_ES_Bk@_Ek@}DKo@U_BU_BIo@_@oCKo@w@uF_@mCIo@U_B_@oC_@oCIo@U_BEWoAkIEYIo@Io@kAyIGe@oAmIKo@a@mCa@oCIm@}BmOKm@U_B_AmGCOU_BIo@Ko@kAmIKo@i@_Ei@uDAIa@mCU_ByA}Jk@}DKo@yBmOKo@mAmIIo@Km@Iq@Ko@S_BKo@Im@Ko@s@iFMu@Mm@Ko@CKK_@Oa@CGm@mAIOi@s@Y]uAy@q@Ok@OuAGYBc@FWBKBa@La@La@NeAZa@LeAZeBj@}Bp@MDqF~Aa@LgBh@a@La@LgBh@eAZgBf@iCv@a@LgBh@ODgANcA?_Ca@eAm@u@y@]o@KOo@kAWcASu@aBcLKo@a@oCIm@U_BW_BOeAEYIo@a@mCIo@U_BKo@k@_EKo@_@mCyBmOIo@w@oFIo@w@mFU_BwA_KU}AIo@c@oCgBkLa@mCKo@Ko@Io@y@kFm@_Ea@oCYmBm@}Da@oCIo@oAmIi@mDW}Aq@mE}@qG}@aG_AiFwA}JAIKo@aCsPAIwA}JCOmAmIIk@SsAAOKk@?CyA}JQoACMW_BIo@G_@YoBKm@Ga@eAkHs@_FCKOy@i@sDKo@w@mFcA}Ga@mCW_BU_BYmBG_@Io@i@_Ek@_EIo@_@oCKo@Io@q@}Ee@aDaBmLm@eEQ_AMk@_@cAWg@c@s@]g@_@e@m@i@{Au@a@O]IA?s@Gu@Ci@@a@Ds@NsAb@a@LkDhAa@NcAZaNnEa@NoFfBc@NaB\\E@WDK@QB[?]@]?A?WAUC{@KyC_AQMqA}@IKg@g@kA_Bi@_A]{@O_@AEOa@U{@Ia@[}AIo@uBoOU}AIo@eD{USsA_@oC_@oCQeA{BgP}@kGg@sDk@}DIo@Ko@Io@Ko@Io@Ko@Io@{@kGWwBIeAEkAEoAUuIA{@Ci@Eq@Gw@MeAk@}DKo@}E{\\Io@a@oCa@oC_@mCKo@a@oCk@_EIm@{@cGW_BIo@Ko@Io@Ko@aBmLaA_HKo@Im@Ko@wBiOKu@Km@_@oCKo@Io@_B}KqAwI?EKo@_@oCKo@Io@m@_EE_@oAmIKo@Io@Ko@Ko@a@mCk@_EKo@yA{JKo@k@_EKo@U}AKo@Ko@a@oCIo@{A{JyA}JKo@w@oFaAuGs@{EcA_HIo@W}AAGiAgIIo@Ko@m@eEOiAIm@CQ?Ec@}CQqAIi@E]EW}@yG_BqLKu@AIAIGeAAs@?EAQDwAb@iF?IFm@@ODc@D[Bm@?O?EAKCMEMAGA?We@"
                     },
                     "start_location" : {
                        "lat" : 44.2485232,
                        "lng" : -78.9640929
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1752
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 131
                     },
                     "end_location" : {
                        "lat" : 44.339681,
                        "lng" : -78.74589209999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eAngeline St S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_dpmG|xq_N[GG?W?C?I@E?[F[Hg@NcA\\C?mA`@WHwAf@kDjAMDQFoA^WLQFiE|AuIxCa@NiC|@eC|@mA`@}C`AgBh@yBr@iDdAc@PIDsAh@eCx@u@VqFfB}@XeA\\eA\\"
                     },
                     "start_location" : {
                        "lat" : 44.3246358,
                        "lng" : -78.7395085
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 438
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 76
                     },
                     "end_location" : {
                        "lat" : 44.3420667,
                        "lng" : -78.7433776
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAuk Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_bsmGx`s_N_@iCWsBEOEEA?KCSBSH_@Ja@NcAZo@R]LM?SAMEMKIQgA_H"
                     },
                     "start_location" : {
                        "lat" : 44.339681,
                        "lng" : -78.74589209999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 136
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 38
                     },
                     "end_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}psmGbqr_NJKHIFKXaAr@}BPm@BM"
                     },
                     "start_location" : {
                        "lat" : 44.3420667,
                        "lng" : -78.7433776
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "20 m",
                        "value" : 20
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{lsmGdhr_N^V"
                     },
                     "start_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "41 m",
                        "value" : 41
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 13
                     },
                     "end_location" : {
                        "lat" : 44.3410364,
                        "lng" : -78.7416585
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{ksmG|hr_Nj@qA"
                     },
                     "start_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "128 km",
                  "value" : 128222
               },
               "duration" : {
                  "text" : "1 hour 30 mins",
                  "value" : 5402
               },
               "end_address" : "80 Doncaster Ave, East York, ON M4C 1Y9, Canada",
               "end_location" : {
                  "lat" : 43.6918156,
                  "lng" : -79.30293859999999
               },
               "start_address" : "200 Albert St S, Lindsay, ON K9V 5E6, Canada",
               "start_location" : {
                  "lat" : 44.3410364,
                  "lng" : -78.7416585
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "41 m",
                        "value" : 41
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "html_instructions" : "Head \u003cb\u003enorthwest\u003c/b\u003e toward \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ojsmGjfr_Nk@pA"
                     },
                     "start_location" : {
                        "lat" : 44.3410364,
                        "lng" : -78.7416585
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "20 m",
                        "value" : 20
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{ksmG|hr_N_@W"
                     },
                     "start_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 461
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 98
                     },
                     "end_location" : {
                        "lat" : 44.3445376,
                        "lng" : -78.7408128
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{lsmGdhr_NBK@MAOE[SsAUyAEQEQM[MWQWsAc@ICWESAODQD{Bx@eA`@mC~@MF"
                     },
                     "start_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 833
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 73
                     },
                     "end_location" : {
                        "lat" : 44.3469849,
                        "lng" : -78.7309563
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMary St W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 19\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k`tmG`ar_Nk@qAK[Ww@YeB_@iCYkCWsAo@qEIo@_BoL{@kGaA}GS_B"
                     },
                     "start_location" : {
                        "lat" : 44.3445376,
                        "lng" : -78.7408128
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2060
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 148
                     },
                     "end_location" : {
                        "lat" : 44.329332,
                        "lng" : -78.723125
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLindsay St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "sotmGncp_N`Bm@`@OfBm@`@OjE{AxAg@bA_@bA]dBm@z@[rBu@bA_@`@OdBm@DAnCcAJCbA_@dA]`@OTKJC`@O`@OtAg@fC}@PGxAi@~CcAl@SxDoARIpAc@jDiAd@MdIiC`JmCZKj@QVKdBs@"
                     },
                     "start_location" : {
                        "lat" : 44.3469849,
                        "lng" : -78.7309563
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "31.0 km",
                        "value" : 30967
                     },
                     "duration" : {
                        "text" : "22 mins",
                        "value" : 1296
                     },
                     "end_location" : {
                        "lat" : 44.0633168,
                        "lng" : -78.624993
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eON-35 S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "iaqmGnrn_NhE}AnAYXKjBg@lAa@BAhDqAvBs@z@[jAa@^MdBk@XI`Bi@~@[`EuAnEwA`EuAxE}AxDoAfEwAvCaA|G{B\\MlFeBvAe@pC}@jA_@XKb@M~Ai@f@QrC{@z@Y~Ai@f@QlDiAfFaBjAa@tDkA~Ai@zAe@z@Y|Ag@jAa@hA_@n@SxAe@p@UhA]BAhA_@zAe@pAc@HCJE`@M|Ag@|Bu@JCnBo@b@OVIlAa@f@OrC}@zBw@fCy@`@MRGn@ULCzBu@`@O\\KvBs@pAa@`@OnAa@r@Wv@YZKXKf@QLEv@Yz@YlAa@l@UjA_@pAe@fBm@`@MjDkAJEzBw@lE{A`@OJChXiJfBm@PGdDiAdA]pGyBzBu@h@QfA_@jAa@x@Wf@ORG`@KVG`@In@Ml@Gz@I@?`@CVAZA|@AP?j@@X?`@Bb@Bd@D~@Jh@Jv@NfAVvA\\rAZvD`AlDz@lBd@b@J`@Jh@LrCp@`Dv@tBf@t@PXFH@^FB?b@D|@Ht@Fl@@r@@l@An@CLANA~@Gl@IPC`@GZG`@G`@Kj@QDA`Cu@|DmAvAa@`A[zC}@nDiAh@OtAa@vBq@|Ae@rC{@VIJCxFgBfF}AlDgAdBi@TGLEbA[rGoB`@MNEzBq@hCw@`@MdA]`Be@vAe@lBk@HCbBi@`@M`@MdF{An@SdBi@b@Mx@UHCb@MdBi@r@UPGdGiBn@S`@MxBq@fDcAxAc@XIHC\\Kr@Up@UDALERIJEl@Wd@U^SBA`@UNIpAy@~@i@`Ak@dFiD~@k@f@]TMh@[`Am@~@k@v@e@FE@?~@k@^U~@k@`BaABC|EuCjAq@jC_BJI^SxBsAfAo@@A\\S`Am@|@k@bBcADCVO~CoBJGTM~BwAbAk@vA{@d@Y`@WPK`B}@NIp@_@n@Y`@SRIHEVKJGrCcAnBs@dA]`@O`@ObA]PGNGfC}@?Ab@OhC_AxDsAbGuBpIyCZMDApE_B~@]`@Od@Q\\KdBm@dA_@dBm@dBo@zAk@RIvBw@l@SHCtAg@f@QrBu@RIjDmAjBq@`EwAl@UjE}Ax@YpBu@fC}@lFmBr@WvBw@hDmA\\MhBq@zAi@jBq@^MbBo@hBo@ZMlAe@~@]v@YpAe@`@QhEaB~B}@jAe@fBq@nAg@RInBw@x@[nAe@xAi@jEcB`@O\\OfHmC|Ao@l@UdBq@ZM`@O`@ODAbAa@dA]VKXKPGzAk@HE|By@HENEpBw@TIPGbA]jAc@jAc@RGNGr@YlHmCd@QtBw@PGRGn@W`@OtAg@ZMhC_AfA_@VKtDoAn@U`A]vBo@f@MXI~@Un@O~@WZIb@EdAIz@Kt@If@Gj@GjBKD?h@C~@Cn@Cz@?^?b@@P@n@?D?b@B^@`AF|@HH@`BR~@LjAPdAP|@N|@PrARjARbAPr@LdARjARdAPnATnAR`APt@Lb@F|@L|@Lp@JnAPJ@P@^DxAJx@@jA?d@Av@CF?p@GZCp@K`@I\\Gj@Mf@MZIf@Qb@Q|@]pAe@`A_@`@OlAe@VKfBq@^MfC_AxAi@l@UxDyAfFmBn@Wl@Sn@Uv@WhDkAb@O`@OrAe@bA]TIzFqBnAc@zAg@fC}@nFmBbA]z@YpCcA`@MnFmB`@MzCgAp@UhBo@\\MvAi@n@Sz@[nBo@t@WtAe@pAi@NGbAa@`@QXMn@YvHcDl@Y|DaBdCeADAzAq@d@QdBu@`EgBhAg@`A_@JExAk@B?\\Mb@O`@OXKFC`Bi@BA`@O`@MdA]@A^Mp@Ur@UXKHCtBs@zAg@xAg@FAbA]JE|@YFCrAe@~Ag@tAe@tFkBHC`@O~@[zAg@tAg@t@U`Bk@BAfCy@l@Sx@Y`@O@?`@M`@O`@M`@O@?`A]b@M\\MB?bA_@`@MPGxBu@hBm@nAc@hBm@n@U`@Ot@W|@YLGf@Ob@OzAg@rAc@bA[dBm@l@Ux@W`@M\\MjC}@dA_@r@UPG`@MbA]BAzAg@zBu@RI`@Mt@Wp@UFCp@WhBu@lAg@ZMZMvD}AdEaBbCaA`@O?ArBy@fBs@vCgAx@WBAp@UZKtBo@PGl@Q~@Yt@UNEb@OZKjC}@nEyAbEoAJC|DoANEfBk@~Ai@zC_An@U|Ae@zAe@xAg@~@YhA]~@[l@Sn@Sl@S|@YlAa@n@SFAb@Od@ObA[`A[tGuBjCy@v@WTI|@Y|@W|@[`@MNGl@Q`@O\\KHCJETGPGZKVIBAd@On@S\\KPGJCXK^M`@K`@Kn@Oj@K`@Ip@Gd@El@EVCLAt@Af@AB?hA@`A@pA@^@J@v@@L?r@@dCBjB@fB@f@@v@?rA@dBBh@Bv@@bBHXBr@BrAHj@BnAFb@BlCN`CJlETH?dADbAFlAFR@p@DR@t@DlAFX@^BL?J?N?J?L?L?LALAB?PAJALCLAJCLCLCREJEBAHALE@ALELE\\QHCNIPIJGJEBATOFEVQTS"
                     },
                     "start_location" : {
                        "lat" : 44.329332,
                        "lng" : -78.723125
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 470
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 44.0596976,
                        "lng" : -78.6231361
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork, follow signs for \u003cb\u003eON-35\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-115\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eToronto\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "wb}kGdm{~MVGJIFGTUZ[@Ax@aAn@w@Z_@@AX]d@g@RSRU@?JIb@c@BA@A@AVSDEBCHEHG@?@ABA@AHEHCB?BAHCHAJ?H?H?F@D?B@B@F@JBFBB@@@HBJFBB^TRLTPJ@PB"
                     },
                     "start_location" : {
                        "lat" : 44.0633168,
                        "lng" : -78.624993
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "18.5 km",
                        "value" : 18484
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 638
                     },
                     "end_location" : {
                        "lat" : 43.9054239,
                        "lng" : -78.622894
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eON-115 S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-35 S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "cl|kGra{~M`@Vd@Xh@VNHVJh@Rh@Nh@NXFPBXDd@FD@N@T@T@J?`@@R?T?TATATAb@C`@ITCTETEREd@MXKRIB?PINGBARIRKTMPKRMRMDCLIb@[LKBATQDC\\W^Wl@a@DELIPORMJIDERMPOPK@AROPMRO@ANKROPMHGHGRMPORMPMFEJGPOROPMRMDELIPMPMRMRKDCLIPI@ARKJEFERIh@UNE?ABAHCFCRGTGRGTGTERGTERELCpAYJATETGTERETEVGTETEVEPETETGb@I`@Kb@Kh@MPGBARGTGRGRGTIRGTIz@Yv@WFCRITGRINEXK\\KFCVKRGNEDARITGRITIJEFARITGRIRGLEFCRGTIRIRGJEHCTI@?PGPG@ATGRGTIRGRITGRITGRINEXIRITIRGTGRITIRGRITIRGRITGd@OXKRITIRGRGh@Qh@QTIRIRGTIh@QRIRGTIRGTIRGRIh@QTGvBu@v@WnFiBTIB?RGJC@ALEz@Q`@Ir@In@E@?@?\\A`@An@?`@Bx@Fl@HD@`AR|@XhA`@d@Tb@Pb@RNHn@V|@^jA^tAZbALz@Dh@@^?h@Aj@EvAOjBc@hFcBlBo@fBm@bEsArC_AdBk@bA]v@WxDoA`@OzBs@n@U`@M~@[`@KVIn@MZG\\GLAf@Gr@EdBG`CI^CtAKLAf@G`AQl@OhA[NE~EyA^KPGZK~DkApAa@rDgAzIiC|Ae@lGsBx@WnAa@FCfBk@VKvC_AjFcB|Ag@HCrAc@x@WlAa@JCTG@A`@KFAZGXGHA\\E@?^EPAPAH?r@CH@h@?\\BN@D?L@j@FXDJBf@JZFXJHBVHRHRHf@Tt@`@JF@@PJLJHFh@b@HFVRpAhABBh@b@^\\hA`AxAnAzApALJNL\\XzApALLHFHHFFRNxBjBbDpC~@v@r@l@FFJH^\\f@`@dFlEfBzAbAz@zAlAd@\\DB\\T~@l@RJbAf@n@X`A\\d@NlAZt@Pj@H`ALfAHv@Bp@@d@?n@A`@Ar@Cj@EZE`@Eb@IH?\\G^Ir@Qb@M`Bi@nOoFvEcB|Am@tBq@dIsCFCDCDABABA@?BATITGZKVGLEZG~AUBA`@GFAz@Kv@M`AO^EZETEdAOb@I~@M|@MNCXEpBYB?HADAB?B?XEHA^El@EZAL?TA^AB@j@?n@?dAFbBP~@J~@N`Eh@bBTz@Jd@HD?B@@?B?@@@?h@Fl@Jv@Jf@DD@tAJv@DJ?H@r@@N?p@?X@l@AJA^AlBIn@Gz@Kb@EHAz@OTEHAREPED?BABABABAB?@?@?@?LEd@MXIj@QHCh@Or@YTIl@Sb@ObA]v@Yl@SbBk@b@QfC{@b@OxEaBTG`@O|By@rCaAZKbFeBJEzBw@ZK~@[d@MfAUr@Gh@El@ERAr@GHAH?lAKv@GTA@AlCSt@Gp@Kv@QNEDAVGp@Sz@YdA_@xCaAFCvDoAfDiA@A\\KvBu@NEjDmANEzAg@LEp@UhBm@fBm@HCrFiBxG{BTGbCy@NEbDgA|Bu@^M\\Mv@SbA]n@Sp@[fA[jA[TGhAYTETGbAO~@MHAXEH?b@Ex@EnAEf@C^?X?dA@f@@z@F|@Hx@Jv@Lj@Jr@LvA^bAXp@V@@HBTHh@RVLB@\\PB?|@f@@@\\P@?@@z@h@zAdABB@@l@d@LJv@p@bA`AnAtAz@~@HHLPdAjAt@z@RTLLj@l@^b@b@d@b@d@hArAZ\\`AfAl@r@FFzBdCPRdCpCtA~A`DjDnCzCDD\\^fAjAh@j@~ClDFFXZdCnCrAzAXXpCzCr@x@bBhBbChC|@bAr@r@LNf@h@pBzBtD`EfAlAZ\\bAhAz@`Ax@z@n@p@hBnBt@z@jDvDbDpDTTTZrCzCTVVT"
                     },
                     "start_location" : {
                        "lat" : 44.0596976,
                        "lng" : -78.6231361
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "37.8 km",
                        "value" : 37767
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1247
                     },
                     "end_location" : {
                        "lat" : 43.8394068,
                        "lng" : -79.0697651
                     },
                     "html_instructions" : "Take the exit onto \u003cb\u003eON-401 W\u003c/b\u003e toward \u003cb\u003eToronto\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "{g~jG``{~MHNFLRT`@f@fBxBRXNRt@`AHJPVXd@T`@^z@DLJVZ~@Lb@Nr@H^Lt@DZBXBTBR?FDl@H|A?FJvBBZ@T?BDhABj@H|B@\\@VPzFD~AB~@@H@HNh@?ZD~AJdDJ`DBp@HrCHtCBp@f@xPBjAFxAHxB@T?PBz@Bp@?D@b@?DHxB@Z@p@Bp@Bp@Bn@DvA@p@Bp@F`B?@HrCNjF@JNvF@XBz@DnALdETfH@r@Bp@F~ATjHDzAJrCHpCFhB@JTbI@L?DBj@JdDHxCF~BNtFLnDLrEHjCNdFHpBFtBPtDLdCNnCBXB`@XfERjCPhBNfBp@lHVzB?HHp@Fd@@N@JJt@PxAHl@Jx@NnAz@rFz@|FHl@?BBLTxAb@dC|@vEp@hD?@XpA@F@DXrAH^@D^bB@DZrAhC|J@Hv@rCPh@l@xBFNh@hBbCvHt@zB|BnGjC~GbBhEbFnMRf@Pb@r@jB\\~@f@rAn@bBpAdDFPJTL\\BFb@hAn@`B^bA@?@DXt@JT`@fADH?@`AfCr@pBN`@Tp@Xx@l@pBNl@Pj@FVl@dCFTv@vDP|@b@fCXfBVlBDd@L|@Dj@Jx@D`@HjAZnEV|DDp@Dn@Dp@F|@LfBVxDLtBDh@Dd@R`DHjA?@JbBRvC\\dFLjBFjANrBNdCHnAFj@Bf@JtAD~@Br@j@`JVzD@P`@fGLhBNvBFbA@Jf@zHb@zGd@hHJ~AZ|EFr@?B@JB`@?@@JHrABd@TtDBT?HBZ@N?D@HvAfT`@lGBXNzB@LHfAfA`QBZNxBDp@HdAVrEJtALfCXrEp@`JPhCZ~Eb@vGF|@|@jNZ~Ed@zGb@|GNlBTlDr@nKBf@RzCJdBFz@ThD`@rGNxBF`AXlEPlC\\hFJvAR`DTpD`@fGRzC\\jFh@hIP|BFdAR`D\\`F^zFB\\R`D?BPlCFt@Dv@FtAFxADzABjA@dA@hA?p@Ap@@vBAbAM`EKnBQnC]lDQvAQnAa@rCs@tDe@rB_@xAY`Ac@|A[dAc@rAm@bBUf@c@bAKX_@x@Yj@INc@|@e@|@OT[j@e@v@eEzG_FfI_AxAy@|AU`@}@dBGPUd@]p@qBpEmAzCcB|E_BhFeBvGc@fBg@|Bk@rCk@~CSrAO`A]hCSzAUlB]vD[lDGl@Gt@Ex@QtCWrGCbAE`BC`BCfD?dDDzHBfABfBDhADtAPxDN~CDl@P~BTjCLlAV`CPzAPnA^tCL|@N|@h@vDHn@Hn@fAtHJv@fB`Mn@nEHl@BTDTDVHl@r@|EjAlIp@|EHh@`A~Gd@bDvAzJdAnHL~@DT^nCp@tED^`@tC^lCNbALt@@JVjBfArH~A~KVlBHh@?BHd@VpBLx@L~@`@lCxBxON`AD\\Hb@T|ANbAV~AxAlHp@dDv@rDlAzFj@jCLl@Np@FZDPh@dC|@lEnAhGx@xDv@dEThAl@~CTpAb@`CHh@TpAb@tCNx@PdA^fC^lCHn@F^BN^lCJn@Hn@`@lCdApHz@fGRxAt@dF@FBP@B@J`A|Gt@lFJl@j@|DHn@r@`FrAfJ@Dh@vD^nCv@lFjAjIbCzPr@bF`@rC@Dj@|Dn@vET|AHh@?D@FHd@NhADTHn@Jl@T~AL|@XhBFd@`@jC@NF^L|@NdARtAXpBNnARbBH|@LxAFx@HjAB^Fx@FxAF`A?TFvAFzC@n@?D?R@lA?r@@\\AdA?FAtACnCGjCGjDGpC_@dPS|JKtFAHQlKGtCc@tSOnFALCpBAd@E`BAp@An@ItCCv@Aj@?DAj@GlBAd@I`DKxDChAElBKnF]`QErACp@A\\EtBCdBEvBA~C@`A?z@?ZBtBFbCF`BDjANlCVxDr@tIb@pF?@ZbEZ`Ef@bGHhAJpAFl@r@|I\\nEb@vFt@|HZbDV|B\\xCf@dERvAVrB|@fG~@~Fv@tEBNz@rE~AfIJf@n@`DxBzKrApHJn@Jl@@?TvAf@~Cv@|Er@pEdAzGJl@l@|DhAlHZnBRjA^`C\\~BDRx@pFJn@V|Ax@pFDZHh@BRPhARvADZL`ARvAXxBLjA|AjMb@xDDZDl@d@zDnA`Ld@rDd@rDdBvLp@nEv@tFBLn@|Dj@pDf@|C^~Bd@xCJh@PfAl@pDRnAN`AfA`Hh@bDh@lDfAlHNlA@@D\\BPLp@XlBrBbPl@xER~ARbBBTTrBd@`EVvB\\zCTnBr@pGRvANvADLBNr@hG?@tCtVr@hGPzAhA`KFp@t@|GHn@Hl@NlAFr@L~@@@l@tE^pBZrAd@fBNh@`B~EdAxCb@lAFNzE|MRh@BHr@nB\\|@HZzCnInFfOZ|@d@nA\\|@l@`Bh@tA^dAt@nBXv@HT`@lA@DTj@Pj@"
                     },
                     "start_location" : {
                        "lat" : 43.9054239,
                        "lng" : -78.622894
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "22.7 km",
                        "value" : 22710
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 756
                     },
                     "end_location" : {
                        "lat" : 43.7683373,
                        "lng" : -79.3231509
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork to continue on \u003cb\u003eOntario 401 Express\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "ikqjG`iraNd@~@Zx@HV^bAZ`Ad@lA`@nAj@`BL^Tn@\\~@Zz@FNt@pBzAfEn@fBPh@fCfHhCfHpD`KzAdEd@rARh@fFtN@Bl@`BhChHPd@nAjDb@lAPh@HTTl@xCnIRh@fCdHRh@HRhBdFRh@tI~UZz@hA`D~@jCJ\\JXN^L\\`@fAtErMhDpJp@fBz@tBd@bAdC~EfAlBxBlDnBxCl@~@n@bAfE~GVb@bBlCdAbBdBzCVb@pC|En@hAFJnBlDn@hAfAlBLTxClF`@r@vF|JbG`LxBfEjCbFlHlNvBzDd@|@\\p@@FXl@pA`CXj@Td@Th@Zp@b@dA`CnFRf@Tf@j@lA^t@d@|@Td@@BN\\BDVd@Td@R^BDl@jAPZDHdArBLXFJl@jAt@tAPNPZt@pAr@nAp@jAj@~@j@bArAvB~@xApBbDpCjET^BFbDlFf@v@p@bABBVb@f@|@h@`APV?@d@x@NZDHp@vAXn@HTN\\?@Rd@?@BFd@rABDZfATx@?@HXBJPt@Nr@H`@V|ANbALbAHv@Fr@Dl@HrA@RBZBp@BjA?DBh@?f@?F@XAv@AdA?\\GvBGbAOvBO|ACPIp@M`AId@If@SdAYpAm@bCKb@_ArD_AxDSt@S|@W`AI\\ADCHIZIZg@nB_@|Ae@jBg@nBOj@w@|CQr@GV?@EROh@AFK`@I^SbAMl@ADG`@CJG\\EXId@Gf@Kr@Kx@Gl@In@El@Gj@CZ?FC^AFEt@GtACh@A^Cv@Al@Ad@C|@?n@?X?fABrBFzBL|CHfAFz@ZfENrB^xE\\pEV|CJbBXhDJvADh@F`ALrAJxADb@Fr@F|@H~@JpAB`@l@`I|@jLl@pHHpALxA?@LvAFn@Ft@H|@Z~Dv@hKN`BDn@j@fHJ~AFn@@FZbEDf@L`B`@rFTpCRdCZ`EL`Bv@dKDn@ZzDj@hHdAbN?BFn@Dl@Fp@L`BF`AJlA?@Fn@RpCLzA@DL`BTtCLnAJt@Fh@BTHl@Jx@Jl@Lz@TtAZbBRbAP|@FTFVZxA^xAh@lBX~@X`Ap@pBTl@b@lAp@`BfAfCz@hB~@hBh@fAd@~@NZr@vANZXj@r@~Af@dAf@pAd@hA@D^~@DLTl@Ph@Tj@Z~@\\fAHZx@lCRr@^tAj@|B|@vD~@dETbAZvAjAtFXdB\\|AZ|Ah@pC@J\\dBn@pDbAbGLv@P`AN|@Jl@?@Fd@VzA`@nCRrATvAn@xERrAPrADTR~Ah@lE@HLhAJv@Hz@p@~FHv@LhAbAvIv@`HHn@?Fj@~E@FFn@hB`Pj@jFl@dFJdAx@dHd@lEBRx@jHBX^|CFj@NhA`@nDTnBBRn@pF@HXdCP~Ah@rEXzBJp@ZjCHr@`@zCThBt@xF`@rCVjBLz@Fb@FZBPtAzJBRn@jEL|@N~@RxAp@tEBJNdARtARtANdAn@jENhABRBLNbAJp@RpA?FbAxGl@~Dz@bGd@dDx@rF^fCBRZrBp@vET~AT`BpFl_@d@xC~@fGLbAN|@Hj@Hr@D`@\\fCPjANx@L`AFb@DT@H@F@HPfAb@~CR|Al@~DDRj@|Dj@~D`@dDXfCRjCFv@Fv@JnBLlDH`E@l@@x@@dB?zF?fC@xHD`O?@?B?@?B?@?B?@@B?B?D?F?H?F?B?H?H?@Ax@"
                     },
                     "start_location" : {
                        "lat" : 43.8394068,
                        "lng" : -79.0697651
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "9.5 km",
                        "value" : 9502
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 448
                     },
                     "end_location" : {
                        "lat" : 43.69999,
                        "lng" : -79.3381972
                     },
                     "html_instructions" : "Take exit \u003cb\u003e375\u003c/b\u003e to merge onto \u003cb\u003eDon Valley Pkwy S\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "cocjGtxccNIRAHAL?NAX?T@d@AZ?xB@fD@zC@rAFzG?@B`ABdCDdB@~@@tA@^?B?R?xD?N?BAdAC`@APE\\EZa@nBEP_@~AEN[vA[vAE\\k@dC_@|AG\\Kh@EXCZCb@?ZBZDp@Df@Jb@L\\JV@BJRHLNP\\ZDDNJHDD@B@JDJDHBH@J@L@N@P?\\@n@?NA^A^C^EJARCp@Mv@QLCfAYh@QZKZKxBs@BAjA_@RGb@Oj@Op@STG\\?b@Mj@OFAvAWjAQ\\GDAJAJAPEvAUHAbBWlCa@t@Mf@Ij@Ir@KREnAQ|@Ox@Mx@MJCZGz@OFA@?|@Sn@O`AW~Ac@hBg@~Ac@hBc@vA[\\GDAZGtAWTCvB[pBWVEXCnAMbAIp@E\\CrAGH?@?t@Er@Cz@CrAEfEQpAGhAKh@EBA^E@?JA|ASB?b@GbAM`AQfAQJATEZGFAb@GdAQnB]\\EdAOjBUp@E|AGhCExB?`A@V?H?^?R?N?LD\\?R?J?^?|@@F?h@?r@?dBCdACn@EF?rD_@`@E@?`@E^E^GhAO|@Mj@IHAXEb@G`@GfBWlC]hBU~BYdAKjBO|BSLA@?f@GpAKjAIx@Gf@?r@CvACL?TAr@AbACbAADA~@?jAAn@A|ACnAChBE~@A^Cf@CxAMNAh@GTCFAPCNCXEtAU|@UZIFCd@MREl@SHCRIp@UdCaA`@SRKTMRMp@_@XQPKZU^WxAeARORQj@a@~@s@h@c@d@]ZUXUXS@C^WLIn@g@\\U@A\\U@ADCPKXORKPIVK@AZKZKTGLCJCZEVETCB?PC\\A@?`@A^?^@ZB@?N@`@F\\FXD^Jb@LXLd@Tb@TXPFDHDHFNLNJJJ@@LLNLLJBDPRNPJLZb@n@~@HJNVjAhBZd@t@hALRp@`A@@v@jAn@~@pA`Bf@f@bAx@\\Tn@\\ZNLDRHRFJD^JPDn@Ll@HdANhALxARtALfBVRDj@H|@R^L\\Jd@R\\RPJNH^Vb@\\XVVVp@z@t@nAXh@\\z@@@Tl@^hA\\hA?BBNfA`EHXXfADNHRN^DLHTHRJRLV\\p@T`@JP"
                     },
                     "start_location" : {
                        "lat" : 43.7683373,
                        "lng" : -79.3231509
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 947
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 143
                     },
                     "end_location" : {
                        "lat" : 43.6955628,
                        "lng" : -79.3396403
                     },
                     "html_instructions" : "Take exit \u003cb\u003e7A\u003c/b\u003e to merge onto \u003cb\u003eDon Mills Rd.\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "}cviGvvfcNDX@D@DDJFN@?H^BJ@J@F@F?JALCHAJEJCBABEBABGBIBC?C@E?G?GAGAGC[KWe@e@cAIQGMG]CM?AAI?G@E?E@G@E?A?C@ABE@EBEBCDEBC@?DCBALEFCNIB?H?XAVAT?P?R?D@F?LA`AAP@\\BF@f@PLFNH@@VNNPNPRXDJFJHPZr@HTFPFRVdAHXJTHTDHJNFFFFFHDD@?DBJDLBFBF?JBH?NCLAPCHENE`AY\\KNEBAhBm@"
                     },
                     "start_location" : {
                        "lat" : 43.69999,
                        "lng" : -79.3381972
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1735
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 201
                     },
                     "end_location" : {
                        "lat" : 43.7001516,
                        "lng" : -79.31906959999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eO'Connor Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ghuiGv_gcNAUG_@Ga@Gk@E[[{BGe@YoBMgAWmBYwBQyAM}@OgAY{BQwAeAaIy@qGKo@S_BIo@OgAo@uECOe@qDOgAWuBi@_Em@oEa@oDG_@k@oEOmA[{Bw@aGM}@Gg@ESCMEICKGMIMIMGG"
                     },
                     "start_location" : {
                        "lat" : 43.6955628,
                        "lng" : -79.3396403
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 862
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 124
                     },
                     "end_location" : {
                        "lat" : 43.6927688,
                        "lng" : -79.31582539999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWoodbine Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}dviGd_ccN\\GVQHGPEfAc@TGr@WvAe@dA]pAc@jC{@x@YlA_@|Ai@n@SBAdA]JEr@UBAvBs@VILGtAc@zAe@ZMz@Y@ATG"
                     },
                     "start_location" : {
                        "lat" : 43.7001516,
                        "lng" : -79.31906959999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 826
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 111
                     },
                     "end_location" : {
                        "lat" : 43.6949139,
                        "lng" : -79.30602739999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLumsden Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yvtiG|jbcNGMAECMOcAQoAOgAAMAM?QAg@@_@?O?OAQAOCOM}@[qBS}Ac@cCIa@Ga@g@eD_BiLcAcHSuAKaA"
                     },
                     "start_location" : {
                        "lat" : 43.6927688,
                        "lng" : -79.31582539999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 404
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 53
                     },
                     "end_location" : {
                        "lat" : 43.69145280000001,
                        "lng" : -79.3045166
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eChisholm Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "eduiGtm`cN|@_@fA[jC{@jC{@hC}@pBo@XK"
                     },
                     "start_location" : {
                        "lat" : 43.6949139,
                        "lng" : -79.30602739999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 133
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 43.6918156,
                        "lng" : -79.30293859999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eDoncaster Ave\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qntiGfd`cNGa@QkAYoBU}A"
                     },
                     "start_location" : {
                        "lat" : 43.69145280000001,
                        "lng" : -79.3045166
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "w`miGnmocN{MhCcCqRmCoe@wIob@yPwoAw@gEwEtBgBh@}]pH_YfQgYpKwXrBgZcHg\\gE{\\m\\qPcZj@sa@wDu_@sSwd@mIuJgVeEi`@cb@sPcBiU`Qy[`LqgBdKcvAhLgrEtn@e_CfZql@pPi]jGoQnCmJv@}@sF{DeQkFyZsLkWcSkXaM_KgL}PwGod@{BqMoEmEsHnCcJdD_OfF{E`ByD_CVdBuBfDgAhS`@hJlBxLkKfC}XlEsDbG`FtT~C~QpYhxB|Fdg@eDnTgfB|[}uAfToiGd`Aum@dEgr@gDybBdSs_ATg~AvAmjAlMg^jEuUpNwWrX}UfL_cAdNy|@lKoyAh[{w@xPwxArO{K_HcMqp@eLsz@g`@}lCmj@__Eii@owDswAueKsx@mdGcuBqmO{UaeBgEuZyBiOyA{JkGrBuHdC_LrD{ZzJeZfJeg@pL{TdD_p@yM_k@~L{gA~]siBfk@cRhDaAoH}D_ZcP}lAyWmoByeA_}HiaAapHwQe_B_DsWqBgPsCsUmDsB}N`BiFk^wI}n@}`@ytCm]mbCqOofAyBwHqJ_Ek^jK{QpFaNeGmKir@}RatAoe@kaDy\\a|BcIcHaJ|@ah@zNyKqEuEaKkVgeBsXk~Bi_A}sGr@sT{G[gl@hSqX`JkLvDcCoFaEz@}EcH`DeGu@qDmDqFkLfDkFgYgFi_@vEkEdVqIvNeFpc@eOt_Cuv@zmCk|@j|A}e@~~@bPpbD{~@`eBgbAftD{rAxdCe{@dv@tFdZfCdUmGraBel@deAeb@boBep@nnC{~@dk@qQxt@Ybk@lBnOkKbIcFxRpGdSyFbPiLrh@_Pff@cP~c@wJtXjHln@cQjfAqVfu@yRl\\xRlu@th@hTi@tm@aTn`@sFli@lElYcFfbAsWxpAqa@bVkGjXrAd`@|Y~yBtfClLfpC`IbcCfRdwA~p@noBpKf\\zGll@|L|lBnMhqBlWf~DfFd|@gG~u@qMn[ef@`iAgIpz@xCz~@|_@`oCja@xaCjw@vkFjAdhBaFnhCvGhdAfTzdBp^pzBjaAjtHtn@nlBbu@htBd`@tfAxo@rqApkAh{Blg@z{@vPhe@p@pT{Ihi@}Mhm@tCrpAnPjwBrOliBd_@tcAx]peB`ZjiCdv@nrFfIhn@`Ah~@Lnm@_Fhp@jT|@raBsZbbBwKn_AqFfc@gOdVuMnS`I|SxWtU~DxNdMvG`TX`Ia@uHjIf@vE|JnC~@hGkB}AqLiKcx@eK}v@bk@{Tm@oLyBuN_Fi]dGyD`LuDiA{H"
         },
         "summary" : "Don Valley Pkwy N",
         "warnings" : [],
         "waypoint_order" : [ 1, 0 ]
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
