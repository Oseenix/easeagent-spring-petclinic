export TESTER_IP="172.20.2.115"
export A_IP="172.20.2.138"
export B_IP="172.20.2.212"


################################################
## test-case-1. all microservices deploy on a machine
## access both at the same time
export BASELINE_IP=${A_IP}
export AGENT_IP=${B_IP}

#export TESTER_IP="host-gateway"
#export BASELINE_IP="host-gateway"
#export AGENT_IP="host-gateway"

export TEMPO_IP=${TESTER_IP}

export CUSTOMERS_BASELINE=${BASELINE_IP}
export VETS_BASELINE=${BASELINE_IP}

export CUSTOMERS_AGENT=${AGENT_IP}
export GATEWAY_AGENT=${AGENT_IP}
export VISITS_AGENT=${AGENT_IP}
export VETS_AGENT=${AGENT_IP}

export NODE_BASELINE=${BASELINE_IP}
export NODE_AGENT=${AGENT_IP}

################################################
## test-case-2.
##
## - config/discovery/api/visits deploy on gateway
## - customers and vets deploy on service
## can't access at the same time
##
export GATEWAY_IP=${A_IP}
export SERVICE_IP=${B_IP}

export NODE_GATEWAY=${GATEWAY_IP}
export NODE_SERVICE=${SERVICE_IP}

export DISCOVERY_IP=${GATEWAY_IP}
export CONFIG_IP=${GATEWAY_IP}

export VISITS_IP=${SERVICE_IP}
export VETS_IP=${SERVICE_IP}
export CUSTOMERS_IP=${SERVICE_IP}


export DOCKER_USER="$(id -u):$(id -g)"

