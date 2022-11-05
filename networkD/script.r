library(networkD3)
source('./r_files/flatten_HTML.r')

############### Library Declarations ###############
####################################################

################### Actual code ####################
data(MisLinks, MisNodes)
####################################################

############# Create and save widget ###############
p = forceNetwork(Links = MisLinks, Nodes = MisNodes, Source = "source",
             Target = "target", Value = "value", NodeID = "name",
             Group = "group", opacity = 0.4)

internalSaveWidget(p, 'out.html');
####################################################
