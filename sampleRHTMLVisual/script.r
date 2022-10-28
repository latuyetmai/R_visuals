source('./r_files/flatten_HTML.r')

############### Library Declarations ###############
libraryRequireInstall("ggplot2");
libraryRequireInstall("plotly")
####################################################

################### Actual code ####################
dataset <- values;

g <- dataset %>%
  ggplot() +
  aes(x = `Number of Passes`,
      y = `Wear Volume (mm^3)`, 
      color = `PDC Type`) +
  geom_point(fill="white", size=2, alpha=1 ) +
  geom_smooth(method = lm,
              formula = y ~ poly(x, 2),
              level = 0.9,
              linetype = 2
              ) +
  theme_light(base_size = 13) +
  theme(
    legend.position = "top",
    legend.justification = c("center", "top")
  )
  labs(x="Number of Passes", 
       y="Wear Volumne (mm^3)", 
       );

####################################################

############# Create and save widget ###############
p = ggplotly(g);
internalSaveWidget(p, 'out.html');
####################################################

################ Reduce paddings ###################
ReadFullFileReplaceString('out.html', 'out.html', ',"padding":[0-9]*,', ',"padding":0,')
####################################################
