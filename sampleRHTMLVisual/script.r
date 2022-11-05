source('./r_files/flatten_HTML.r')

############### Library Declarations ###############
libraryRequireInstall("ggplot2");
libraryRequireInstall("plotly")
####################################################

################### Actual code ####################
Pass.Number <- dataset[,1]
Wear.Volume <- dataset[,2]
PDC.Type <- dataset[,3]

df <- data.frame(Pass.Number, Wear.Volume, PDC.Type)


g <- ggplot(data = df) +
  aes(x = Pass.Number,
      y = Wear.Volume, 
      color = PDC.Type) +
  geom_point(size=3 ) +
  geom_smooth(method = lm,
              formula = y ~ poly(x, 2),
              level = 0.9,
              linetype = 2,
              weight = 1,
              fill=rgb(0.7,0.7,0.7,0.4),
              se = TRUE
              ) +
  theme_light(base_size = 14) +
  theme(
    legend.position = "top",
    legend.justification = c("center", "top")
  ) + 
  labs(x="Number of Passes", 
       y="Wear Volumne (mm^3)",
       title = "Quadratic Polynomial Model - 90% Confidence Interval" 
       )

####################################################

############# Create and save widget ###############
p = ggplotly(g);
internalSaveWidget(p, 'out.html');
####################################################
